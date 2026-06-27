import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Cpu, Play, Square, RotateCcw, Power, CheckCircle, HelpCircle, 
  Settings, Layers, Terminal, ArrowRight, Zap, RefreshCw, AlertCircle
} from 'lucide-react';

type PresetType = 'latching' | 'timer' | 'jog';

export default function PlcSimulator() {
  const [preset, setPreset] = useState<PresetType>('latching');
  const [plcMode, setPlcMode] = useState<'RUN' | 'STOP'>('RUN');
  
  // Virtual physical input buttons/switches
  const [startBtnPressed, setStartBtnPressed] = useState(false);
  const [stopBtnPressed, setStopBtnPressed] = useState(false);
  
  // Live PLC Output Coil
  const [outputMotor, setOutputMotor] = useState(false);
  
  // Timer On Delay variables
  const [timerValue, setTimerValue] = useState(0); // 0 to 3 seconds
  const [timerMax] = useState(3); // 3 seconds preset
  
  // System logs terminal mimic
  const [logs, setLogs] = useState<string[]>([
    "SYS: HITECH VIRTUAL CPU (S7-1200 Mimic) initialized.",
    "SYS: System integrity check OK. Status: RUN mode.",
    "SYS: Preset loaded: Motor Start/Stop Latching Logic (Seal-In Circuit)."
  ]);

  const timerIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const addLog = (msg: string) => {
    const timestamp = new Date().toLocaleTimeString();
    setLogs(prev => [`[${timestamp}] ${msg}`, ...prev.slice(0, 8)]);
  };

  // Reset simulator state when switching presets
  const handlePresetChange = (newPreset: PresetType) => {
    setPreset(newPreset);
    setStartBtnPressed(false);
    setStopBtnPressed(false);
    setOutputMotor(false);
    setTimerValue(0);
    if (timerIntervalRef.current) {
      clearInterval(timerIntervalRef.current);
    }
    
    let desc = "";
    if (newPreset === 'latching') desc = "Motor Latching Logic (Seal-In Circuit).";
    if (newPreset === 'timer') desc = "TON (Timer On-Delay) Logic. 3-Second Delay.";
    if (newPreset === 'jog') desc = "Jog Control Logic. Direct output mapping.";
    
    addLog(`CONFIG: Loaded ${desc}`);
  };

  // Toggle PLC Mode
  const togglePlcMode = () => {
    if (plcMode === 'RUN') {
      setPlcMode('STOP');
      setStartBtnPressed(false);
      setStopBtnPressed(false);
      setOutputMotor(false);
      setTimerValue(0);
      if (timerIntervalRef.current) {
        clearInterval(timerIntervalRef.current);
      }
      addLog("WARNING: PLC switched to STOP mode. All outputs forced LOW.");
    } else {
      setPlcMode('RUN');
      addLog("SYS: PLC switched to RUN mode. Monitoring logic scan cycle (2ms).");
    }
  };

  // Main Logic Solver Loop (mimicking continuous PLC cycle evaluation)
  useEffect(() => {
    if (plcMode === 'STOP') {
      setOutputMotor(false);
      return;
    }

    if (preset === 'latching') {
      // Seal-In logic: Output = (Start || Output) && !Stop
      // In a real electrical PLC, the STOP button is physically wired as Normally Closed (NC),
      // meaning it supplies 24V (Logic 1) when NOT pressed, and 0V (Logic 0) when pressed.
      // For ease of student visualization, we treat stopBtnPressed = true as breaking the flow.
      const isLatching = (startBtnPressed || outputMotor) && !stopBtnPressed;
      if (isLatching !== outputMotor) {
        setOutputMotor(isLatching);
        if (isLatching) {
          addLog("COIL: Output O:0.0 (MOTOR_RUN) set HIGH. Seal-in loop active.");
        } else if (stopBtnPressed) {
          addLog("INPUT: Stop Pushbutton I:0.1 pressed. Breaking seal-in. Output O:0.0 forced LOW.");
        }
      }
    } 
    
    else if (preset === 'jog') {
      // Jog logic: Output = Start
      const isJogging = startBtnPressed;
      if (isJogging !== outputMotor) {
        setOutputMotor(isJogging);
        if (isJogging) {
          addLog("COIL: Jogging Output O:0.0 HIGH (button held).");
        } else {
          addLog("COIL: Jogging button released. Output O:0.0 LOW.");
        }
      }
    }
  }, [startBtnPressed, stopBtnPressed, preset, plcMode]);

  // Handle TON (Timer On Delay) Logic separately
  useEffect(() => {
    if (plcMode === 'STOP' || preset !== 'timer') {
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
      setTimerValue(0);
      return;
    }

    if (startBtnPressed) {
      addLog("TIMER: Input I:0.0 high. Timer T4:0 activated (TON). Counting preset...");
      timerIntervalRef.current = setInterval(() => {
        setTimerValue(prev => {
          if (prev >= timerMax) {
            if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
            return timerMax;
          }
          return prev + 1;
        });
      }, 1000);
    } else {
      // Reset timer instantly when input is removed (standard TON reset behavior!)
      if (timerIntervalRef.current) {
        clearInterval(timerIntervalRef.current);
      }
      if (timerValue > 0) {
        addLog("TIMER: Input I:0.0 went LOW before time-up. Timer T4:0 reset to 0s.");
      }
      setTimerValue(0);
      setOutputMotor(false);
    }

    return () => {
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    };
  }, [startBtnPressed, preset, plcMode]);

  // Handle timer output coil trigger
  useEffect(() => {
    if (preset === 'timer' && plcMode === 'RUN') {
      if (timerValue >= timerMax) {
        setOutputMotor(true);
        addLog("TIMER: T4:0 Done Bit (DN) is HIGH. Triggering Output O:0.0 (COOLING_FAN) HIGH.");
      } else {
        setOutputMotor(false);
      }
    }
  }, [timerValue, preset, plcMode]);

  const resetAll = () => {
    setStartBtnPressed(false);
    setStopBtnPressed(false);
    setOutputMotor(false);
    setTimerValue(0);
    if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    setLogs([
      "SYS: Warm reboot complete.",
      `SYS: PLC in ${plcMode} mode.`,
      `SYS: Active preset: ${preset.toUpperCase()}`
    ]);
  };

  return (
    <div className="space-y-8 animate-fade-in" id="plc-simulator-module">
      {/* Tab Header Banner */}
      <div className="bg-gradient-to-br from-[#0c2340] to-slate-900 text-white p-6 sm:p-8 rounded-2xl shadow-xs relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="relative z-10">
          <div className="inline-flex items-center gap-1.5 bg-sky-500/20 text-sky-300 text-[10px] font-bold px-2.5 py-1 rounded-md mb-4 uppercase tracking-wider border border-sky-500/30">
            <Cpu className="w-3.5 h-3.5" /> Virtual Lab Environment
          </div>
          <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">
            Interactive PLC Logic Lab
          </h3>
          <p className="text-xs sm:text-sm text-sky-100/90 leading-relaxed mt-3 max-w-4xl font-medium">
            Learn the core philosophy of Programmable Logic Controller (PLC) scan cycle execution and Ladder Logic programming in real-time. Toggle different presets, press inputs, and analyze how electrical logic rungs evaluate from left-rail power to right-rail coils.
          </p>
        </div>
      </div>

      {/* Simulator Interface Container Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Control Column (Presets & Hardware Panel) - 4 Cols */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Preset Selector */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 space-y-3.5 shadow-2xs">
            <h4 className="font-extrabold text-slate-800 text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2">
              <Settings className="w-4 h-4 text-[#0284c7]" /> Select Control Circuit
            </h4>
            <div className="flex flex-col gap-2">
              {[
                { 
                  id: 'latching', 
                  title: '1. Seal-In Latching Loop', 
                  desc: 'A permanent latch circuit holding motor output active even after START is released.'
                },
                { 
                  id: 'timer', 
                  title: '2. TON (Time-On Delay)', 
                  desc: 'Delays activating a heavy compressor or fan for 3s to stabilize load currents.'
                },
                { 
                  id: 'jog', 
                  title: '3. Jog Pushbutton Control', 
                  desc: 'Motor runs strictly while the START button is held down. Release turns it off.'
                }
              ].map((p) => (
                <button
                  key={p.id}
                  onClick={() => handlePresetChange(p.id as PresetType)}
                  className={`w-full text-left p-3 rounded-xl border transition text-xs ${
                    preset === p.id
                      ? 'bg-sky-50 border-[#0284c7] text-[#0284c7] font-bold'
                      : 'border-slate-150 hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <div className="font-extrabold uppercase">{p.title}</div>
                  <div className="text-[10px] text-slate-500 font-medium leading-relaxed mt-0.5">{p.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Virtual PLC CPU Controller */}
          <div className="bg-slate-900 rounded-2xl p-5 text-white border border-slate-850 shadow-md relative overflow-hidden">
            <div className="absolute top-2 right-3 flex items-center gap-1.5">
              <span className="text-[9px] font-bold tracking-widest text-slate-500 uppercase">HITECH H1200</span>
            </div>
            
            <h4 className="font-extrabold text-[11px] text-slate-400 uppercase tracking-widest flex items-center gap-1.5 mb-4">
              <Zap className="w-4 h-4 text-amber-500" /> Virtual Hardware Rack
            </h4>

            {/* Hardware Layout */}
            <div className="space-y-4">
              {/* PLC Modes Panel */}
              <div className="flex items-center justify-between bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                <div className="flex items-center gap-3">
                  {/* Status LEDs */}
                  <div className="flex gap-2">
                    <div className="flex flex-col items-center">
                      <span className="text-[7px] text-slate-400 uppercase font-black">RUN</span>
                      <div className={`w-3 h-3 rounded-full mt-1 transition-all duration-300 ${
                        plcMode === 'RUN' ? 'bg-emerald-500 shadow-[0_0_8px_#10b981]' : 'bg-slate-650'
                      }`}></div>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-[7px] text-slate-400 uppercase font-black">STOP</span>
                      <div className={`w-3 h-3 rounded-full mt-1 transition-all duration-300 ${
                        plcMode === 'STOP' ? 'bg-rose-500 shadow-[0_0_8px_#f43f5e]' : 'bg-slate-650'
                      }`}></div>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-[7px] text-slate-400 uppercase font-black">OUT</span>
                      <div className={`w-3 h-3 rounded-full mt-1 transition-all duration-300 ${
                        outputMotor && plcMode === 'RUN' ? 'bg-amber-400 shadow-[0_0_8px_#fbbf24]' : 'bg-slate-650'
                      }`}></div>
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-black uppercase tracking-wider font-mono">
                      CPU Status: <span className={plcMode === 'RUN' ? 'text-emerald-400' : 'text-rose-400'}>{plcMode}</span>
                    </div>
                    <div className="text-[9px] text-slate-400">Scan Cycle Active</div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={togglePlcMode}
                    className={`px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 transition ${
                      plcMode === 'RUN'
                        ? 'bg-rose-600 hover:bg-rose-700 active:bg-rose-800 text-white'
                        : 'bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white'
                    }`}
                  >
                    {plcMode === 'RUN' ? <Square className="w-3 h-3 fill-white" /> : <Play className="w-3 h-3 fill-white" />}
                    {plcMode === 'RUN' ? 'STOP' : 'RUN'}
                  </button>
                  <button
                    onClick={resetAll}
                    className="p-1.5 bg-slate-700 hover:bg-slate-600 rounded-lg text-slate-300 hover:text-white transition"
                    title="Warm Restart Simulator"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Physical Input Pushbuttons */}
              <div className="space-y-3">
                <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block">Operator Control Desk</span>
                
                <div className="grid grid-cols-2 gap-4">
                  {/* START BUTTON */}
                  <div className="bg-slate-800 p-3.5 rounded-xl border border-slate-700 flex flex-col items-center">
                    <span className="text-[9px] font-extrabold text-slate-400 uppercase">Input I:0.0</span>
                    <span className="text-[10px] text-emerald-400 font-extrabold tracking-wider mt-0.5">START PB (NO)</span>
                    
                    <button
                      disabled={plcMode === 'STOP'}
                      onMouseDown={() => setStartBtnPressed(true)}
                      onMouseUp={() => setStartBtnPressed(false)}
                      onMouseLeave={() => setStartBtnPressed(false)}
                      onTouchStart={(e) => { e.preventDefault(); setStartBtnPressed(true); }}
                      onTouchEnd={(e) => { e.preventDefault(); setStartBtnPressed(false); }}
                      className={`w-14 h-14 rounded-full mt-3 font-bold text-xs uppercase shadow-md flex items-center justify-center transition border cursor-pointer select-none active:scale-90 ${
                        startBtnPressed
                          ? 'bg-emerald-500 border-emerald-400 text-slate-950 shadow-[0_0_12px_#10b981]'
                          : plcMode === 'STOP'
                          ? 'bg-slate-700 border-slate-600 text-slate-500 cursor-not-allowed'
                          : 'bg-emerald-650 hover:bg-emerald-600 border-emerald-500 text-white'
                      }`}
                    >
                      Hold
                    </button>
                    <span className="text-[8px] text-slate-400 mt-2 text-center">Click & hold to close contact</span>
                  </div>

                  {/* STOP BUTTON */}
                  <div className="bg-slate-800 p-3.5 rounded-xl border border-slate-700 flex flex-col items-center">
                    <span className="text-[9px] font-extrabold text-slate-400 uppercase">Input I:0.1</span>
                    <span className="text-[10px] text-rose-400 font-extrabold tracking-wider mt-0.5">STOP PB (NC)</span>
                    
                    <button
                      disabled={plcMode === 'STOP'}
                      onMouseDown={() => setStopBtnPressed(true)}
                      onMouseUp={() => setStopBtnPressed(false)}
                      onMouseLeave={() => setStopBtnPressed(false)}
                      onTouchStart={(e) => { e.preventDefault(); setStopBtnPressed(true); }}
                      onTouchEnd={(e) => { e.preventDefault(); setStopBtnPressed(false); }}
                      className={`w-14 h-14 rounded-full mt-3 font-bold text-xs uppercase shadow-md flex items-center justify-center transition border cursor-pointer select-none active:scale-90 ${
                        stopBtnPressed
                          ? 'bg-rose-500 border-rose-400 text-slate-950 shadow-[0_0_12px_#f43f5e]'
                          : plcMode === 'STOP'
                          ? 'bg-slate-700 border-slate-600 text-slate-500 cursor-not-allowed'
                          : 'bg-rose-700 hover:bg-rose-650 border-rose-500 text-white'
                      }`}
                    >
                      Press
                    </button>
                    <span className="text-[8px] text-slate-400 mt-2 text-center font-medium">Click to interrupt supply</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Right Ladder Diagram Screen Column - 7 Cols */}
        <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
          
          {/* Ladder Logic Canvas */}
          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-5 space-y-4 shadow-3xs flex-1">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <h4 className="font-extrabold text-slate-800 text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2">
                <Layers className="w-4 h-4 text-emerald-600" />
                Live Ladder Diagram Editor
              </h4>
              <div className="text-[10px] text-slate-400 font-bold uppercase font-mono">
                Rung Scan Interval: 2ms
              </div>
            </div>

            {/* Simulated Logic Canvas Visual */}
            <div className="relative border border-slate-200 rounded-xl bg-white p-6 min-h-[220px] flex flex-col justify-center space-y-12 select-none overflow-x-auto">
              
              {/* Power Rails Labels */}
              <div className="absolute top-2 left-2 text-[8px] font-black text-slate-400 uppercase">Power Rail L1 (+24V)</div>
              <div className="absolute top-2 right-2 text-[8px] font-black text-slate-400 uppercase">Neutral Rail L2 (0V)</div>

              {/* Rails Lines */}
              <div className="absolute left-4 top-4 bottom-4 w-1 bg-[#0284c7]/20 rounded-full"></div>
              <div className="absolute right-4 top-4 bottom-4 w-1 bg-slate-200 rounded-full"></div>

              {/* -------------------- RUNG 0 -------------------- */}
              <div className="flex items-center justify-between w-full pl-3 pr-3 relative">
                
                {/* Connection line helper (Left Rail to Start Switch) */}
                <div className={`h-1 flex-1 transition-all duration-300 ${
                  plcMode === 'RUN' ? 'bg-emerald-500 shadow-[0_0_4px_#10b981]' : 'bg-slate-250'
                }`}></div>

                {/* Sub-Branch Layout for Latching / Parallel Contacts */}
                <div className="flex flex-col relative py-6">
                  {/* Parallel Rung Branches if latching is active */}
                  <div className="flex items-center">
                    
                    {/* START Contact I:0.0 */}
                    <div className="flex items-center relative px-4">
                      <div className="text-center">
                        <span className="text-[9px] font-bold text-slate-400 block -mt-4">I:0.0</span>
                        {/* NO Symbol: | | or |/| */}
                        <div className="flex items-center gap-1 my-1">
                          <span className={`w-0.5 h-6 block ${plcMode === 'RUN' && startBtnPressed ? 'bg-emerald-500' : 'bg-slate-400'}`}></span>
                          <span className={`w-2.5 h-0.5 block ${plcMode === 'RUN' && startBtnPressed ? 'bg-emerald-500' : 'bg-slate-400'}`}></span>
                          <span className={`w-0.5 h-6 block ${plcMode === 'RUN' && startBtnPressed ? 'bg-emerald-500' : 'bg-slate-400'}`}></span>
                        </div>
                        <span className="text-[8px] font-bold text-slate-600 block uppercase">START PB</span>
                      </div>
                    </div>

                    {/* Latching Switch Line for preset comparison */}
                    <div className={`h-1 w-12 transition-all duration-300 ${
                      plcMode === 'RUN' && (startBtnPressed || (preset === 'latching' && outputMotor)) ? 'bg-emerald-500 shadow-[0_0_4px_#10b981]' : 'bg-slate-250'
                    }`}></div>

                  </div>

                  {/* Parallel Seal-In Contact Row */}
                  {preset === 'latching' && (
                    <div className="absolute left-0 bottom-[-16px] flex items-center">
                      {/* Vertical line left branch */}
                      <div className={`w-0.5 h-7 absolute left-8 top-[-10px] ${
                        plcMode === 'RUN' ? 'bg-emerald-500' : 'bg-slate-300'
                      }`}></div>

                      {/* Seal-In Contact symbol */}
                      <div className="flex items-center pl-8">
                        <div className="text-center bg-white px-2 z-10">
                          <span className="text-[9px] font-bold text-slate-400 block -mt-2">O:0.0</span>
                          <div className="flex items-center gap-1 my-0.5 justify-center">
                            <span className={`w-0.5 h-5 block ${plcMode === 'RUN' && outputMotor ? 'bg-emerald-500' : 'bg-slate-400'}`}></span>
                            <span className={`w-2 h-0.5 block ${plcMode === 'RUN' && outputMotor ? 'bg-emerald-500' : 'bg-slate-400'}`}></span>
                            <span className={`w-0.5 h-5 block ${plcMode === 'RUN' && outputMotor ? 'bg-emerald-500' : 'bg-slate-400'}`}></span>
                          </div>
                          <span className="text-[8px] font-bold text-slate-600 block uppercase">MOTOR_AUX</span>
                        </div>
                      </div>

                      {/* Vertical line right branch */}
                      <div className={`w-0.5 h-7 absolute right-[-48px] top-[-10px] ${
                        plcMode === 'RUN' && outputMotor ? 'bg-emerald-500' : 'bg-slate-300'
                      }`}></div>
                    </div>
                  )}
                </div>

                {/* Connection line from inputs to STOP Button */}
                <div className={`h-1 w-10 transition-all duration-300 ${
                  plcMode === 'RUN' && (startBtnPressed || outputMotor || preset === 'jog') ? 'bg-emerald-500 shadow-[0_0_4px_#10b981]' : 'bg-slate-250'
                }`}></div>

                {/* STOP Contact I:0.1 (Normally Closed Switch) */}
                <div className="flex items-center relative px-4 z-10">
                  <div className="text-center bg-white">
                    <span className="text-[9px] font-bold text-slate-400 block -mt-4">I:0.1</span>
                    {/* NC Symbol: |/| (Normal Open has no line, NC has a diagonal cross line) */}
                    <div className="flex items-center justify-center my-1 relative h-6 w-5 mx-auto">
                      <span className={`w-0.5 h-6 block absolute left-1 ${plcMode === 'RUN' && !stopBtnPressed ? 'bg-emerald-500' : 'bg-slate-400'}`}></span>
                      <span className={`w-0.5 h-6 block absolute right-1 ${plcMode === 'RUN' && !stopBtnPressed ? 'bg-emerald-500' : 'bg-slate-400'}`}></span>
                      {/* NC Diagonal Bar */}
                      <span className={`w-6 h-0.5 block absolute rotate-[-45deg] ${plcMode === 'RUN' && !stopBtnPressed ? 'bg-emerald-500' : 'bg-rose-500'}`}></span>
                    </div>
                    <span className="text-[8px] font-bold text-slate-600 block uppercase">STOP (NC)</span>
                  </div>
                </div>

                {/* Connection line from STOP to Output Coil */}
                <div className={`h-1 flex-1 transition-all duration-300 ${
                  plcMode === 'RUN' && outputMotor ? 'bg-emerald-500 shadow-[0_0_4px_#10b981]' : 'bg-slate-250'
                }`}></div>

                {/* Timer details overlay if timer preset is active */}
                {preset === 'timer' && (
                  <div className="flex items-center relative px-2.5 z-10 bg-white border border-slate-200 rounded-lg p-1 text-center min-w-[75px]">
                    <div>
                      <span className="text-[7.5px] font-black text-[#0284c7] block">T4:0 (TON)</span>
                      <span className="text-[9px] font-bold text-slate-600 block font-mono">{timerValue}s / {timerMax}s</span>
                      <div className="w-12 h-1 bg-slate-100 rounded-full mx-auto overflow-hidden mt-0.5">
                        <div 
                          className="h-full bg-sky-500 transition-all duration-200" 
                          style={{ width: `${(timerValue / timerMax) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Connection line to Coil */}
                {preset === 'timer' && (
                  <div className={`h-1 flex-1 transition-all duration-300 ${
                    plcMode === 'RUN' && outputMotor ? 'bg-emerald-500 shadow-[0_0_4px_#10b981]' : 'bg-slate-250'
                  }`}></div>
                )}

                {/* OUTPUT COIL O:0.0 */}
                <div className="flex items-center relative px-4 bg-white z-10">
                  <div className="text-center">
                    <span className="text-[9px] font-bold text-slate-400 block -mt-4">O:0.0</span>
                    {/* Coil Symbol: ( ) */}
                    <div className="flex items-center justify-center my-1 text-base font-black font-mono">
                      <span className={`transition-colors ${plcMode === 'RUN' && outputMotor ? 'text-emerald-500 drop-shadow-[0_0_4px_#10b981]' : 'text-slate-400'}`}>
                        ( Q )
                      </span>
                    </div>
                    <span className="text-[8px] font-bold text-slate-600 block uppercase">
                      {preset === 'timer' ? 'COMPRESSOR_FAN' : 'MOTOR_RUN'}
                    </span>
                  </div>
                </div>

                {/* Connection line helper (Coil to Neutral Rail L2) */}
                <div className="h-1 w-6 bg-slate-250"></div>
              </div>

            </div>

            {/* Industrial Output Mimic Load */}
            <div className="bg-slate-900 rounded-xl p-4 flex items-center justify-between text-white border border-slate-800">
              <div className="flex items-center gap-3">
                <div className={`p-2.5 rounded-lg shrink-0 transition-all ${
                  plcMode === 'RUN' && outputMotor
                    ? 'bg-amber-500/10 text-amber-400 shadow-[0_0_12px_rgba(245,158,11,0.2)] border border-amber-500/30'
                    : 'bg-slate-800 text-slate-500 border border-transparent'
                }`}>
                  <Power className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-bold text-xs uppercase tracking-tight">Industrial Plant Output Device</h5>
                  <p className="text-[10px] text-slate-400">
                    Target Machine: <span className="font-bold text-white uppercase">{preset === 'timer' ? 'Heavy Exhaust Fan Load' : '3-Phase Induction Motor (M1)'}</span>
                  </p>
                </div>
              </div>

              <div>
                <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-md ${
                  plcMode === 'RUN' && outputMotor
                    ? 'bg-amber-500/15 text-amber-400 border border-amber-500/30 animate-pulse'
                    : 'bg-slate-800 text-slate-500'
                }`}>
                  {plcMode === 'RUN' && outputMotor ? '⚡ ACTIVE (240V AC)' : '❌ STOPPED'}
                </span>
              </div>
            </div>

          </div>

          {/* Terminal / Live Diagnostics Logs */}
          <div className="bg-slate-950 text-emerald-400 rounded-2xl border border-slate-850 p-4 font-mono text-[10.5px] shadow-sm relative overflow-hidden h-[180px] flex flex-col justify-between">
            <div className="absolute top-2 right-3 flex items-center gap-1.5 text-slate-500 text-[9px] uppercase font-bold">
              <Terminal className="w-3.5 h-3.5 text-slate-500" /> Diagnostics Monitor
            </div>
            
            <div className="overflow-y-auto space-y-1 pr-2 flex-1 scrollbar-thin">
              <AnimatePresence>
                {logs.map((log, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="leading-relaxed whitespace-pre-wrap select-text"
                  >
                    {log}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            <div className="pt-2 border-t border-slate-900 flex justify-between items-center text-[9px] text-slate-500 font-bold uppercase mt-2">
              <span>HITECH INTERNAL BUS SPEED: 115.2 KBPS</span>
              <span>BUFFER STATUS: 100% OK</span>
            </div>
          </div>

        </div>

      </div>

      {/* Classroom Link Info */}
      <div className="bg-gradient-to-r from-teal-50 to-emerald-50 border border-emerald-150 p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xs">
        <div className="space-y-1.5 text-center sm:text-left">
          <h4 className="font-black text-slate-900 text-base uppercase tracking-tight">
            Want to Practice on Physical Siemens & Allen-Bradley PLCs?
          </h4>
          <p className="text-xs text-slate-600 leading-relaxed font-medium">
            We provide individual hardware kits containing physical PLCs, VFDs, sensor boards, and digital simulators to every student. No group sharing. Join Hitech Automation today.
          </p>
        </div>
        <a
          href="https://wa.me/919848607404?text=Hello%20Hitech%20Automation,%20I%20completed%20the%20PLC%20virtual%2520logic%2520simulator%20and%20want%20to%20enroll%20in%20direct%20lab%20batches"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-black text-xs uppercase tracking-wider px-5 py-3.5 rounded-xl shadow-md transition duration-200 cursor-pointer active:scale-95 text-center whitespace-nowrap"
        >
          Book Direct Lab Batches
        </a>
      </div>

    </div>
  );
}
