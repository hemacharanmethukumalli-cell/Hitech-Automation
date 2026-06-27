export interface CourseModule {
  name: string;
  duration: string;
  description: string;
  topics: string[];
}

export interface Course {
  id: string;
  name: string;
  shortName: string;
  duration: string;
  syllabus: CourseModule[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface StudentPlacement {
  id: string;
  name: string;
  branch: string;
  company: string;
  package?: string;
  photoUrl?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export const COMPANY_CONTACT = {
  name: "HITECH AUTOMATION",
  logoSubtitle: "Industrial Automation Training Center",
  tagline: "Vijayawada's Premium Lab for Practical PLC & SCADA Training",
  address: "D.no:1-61/2, L.V Prasad Eye Institute road, Brundavanam Street, Tadigadapa, Vijayawada, Andhra Pradesh - 521137",
  landmark: "L.V Prasad Eye Institute road, Brundavanam Street",
  phoneNumbers: ["+91 98486 07404", "+91 99484 10297", "+91 92464 87404"],
  emails: ["hitechautomation.manager@gmail.com"],
  websites: ["www.plcvijayawada.com", "https://hitech-automation.business.site/"],
  trainingTimings: "Monday - Saturday: 8:00 AM - 8:30 PM | Sunday: Closed",
  mapUrl: "https://maps.google.com/?q=Hitech+Automation+Tadigadapa+Vijayawada"
};

export const SERVICES_LIST: Service[] = [
  {
    id: "training",
    title: "PLC & SCADA Training",
    description: "Hands-on individual training with live working hardware kits. Specialized courses for electrical, electronics, and instrumentation engineering students or working graduates.",
    icon: "GraduationCap"
  },
  {
    id: "panel-building",
    title: "Industrial Control Panels",
    description: "Design, wiring, and assembly of customized electrical control panels, including PLC panels, APFC panels, VFD panels, and AMF control systems.",
    icon: "Cpu"
  },
  {
    id: "software-development",
    title: "PLC & SCADA Programming",
    description: "End-to-end software development and commissioning for Siemens, Allen Bradley, and Delta PLCs. Intouch, WinCC, and general SCADA screen graphics design.",
    icon: "Code"
  },
  {
    id: "troubleshooting",
    title: "Retrofitting & Troubleshooting",
    description: "On-site industrial support for machineries, vintage machinery upgrading via PLC integration, and high-frequency noise or VFD fault debugging.",
    icon: "Wrench"
  }
];

export const COURSES_LIST: Course[] = [
  {
    id: "plc",
    name: "Programmable Logic Controllers (PLC)",
    shortName: "PLC",
    duration: "30-45 Days",
    syllabus: [
      {
        name: "Introduction to Automation & Hardware",
        duration: "Week 1",
        description: "Understanding industrial power circuits, control logic, sensing technologies, and PLC architecture.",
        topics: [
          "Automation overview & evolution in factories",
          "PLC system architecture: CPU, power supply, I/O modules",
          "Digital and Analog signaling concepts (0-10V, 4-20mA)",
          "Sinks and Sources (PNP vs NPN sensors)",
          "Relay logic controls vs PLC controls",
          "Wiring & Interfacing sensors (limit switches, prox switches, photoelectric sensors)"
        ]
      },
      {
        name: "PLC Ladder Logic Programming",
        duration: "Week 2-3",
        description: "Learning design languages and instruction sets with certified industrial tools.",
        topics: [
          "Standard logic gates in Ladder Diagram (NO, NC contacts)",
          "Interlocking concepts & memory coil addressing",
          "Timer Instructions (On-Delay TON, Off-Delay TOF, Retentive RTO)",
          "Counter Instructions (Count Up CTU, Count Down CTD, Reset)",
          "Comparison operations (Equal, Greater than, Less than, Limit)",
          "Mathematical operations & data word manipulation",
          "Interfacing Analog Inputs/Outputs with field transmitters"
        ]
      },
      {
        name: "Multi-Brand Hands-On Laboratory Coaching",
        duration: "Week 4-5",
        description: "Writing and downloading logic directly to individual working hardware boards.",
        topics: [
          "SIEMENS (S7-1200 / S7-300 / LOGO! using TIA Portal & Step 7 Micro/Win)",
          "ALLEN BRADLEY (MicroLogix 1000/1200/1400 utilizing RSLogix 500)",
          "DELTA (DVP series with WPLSoft / ISPSoft tools)",
          "MITSUBISHI (FX series utilizing GX Works)",
          "OMRON (CP1E using CX-Programmer)",
          "Uploading, downloading, online monitoring, and software forced-inputs debugging"
        ]
      }
    ]
  },
  {
    id: "scada",
    name: "Supervisory Control & Data Acquisition (SCADA)",
    shortName: "SCADA",
    duration: "15 Days",
    syllabus: [
      {
        name: "SCADA Core Environment & Graphics",
        duration: "Week 1",
        description: "Creating industrial screen applications with vector shapes and database tags.",
        topics: [
          "Introduction to SCADA architecture & computer-interfacing standards",
          "Creating high-end mimic display graphics with realistic buttons, tanks, and pipes",
          "Tag types configuration: Memory vs I/O tags (discrete, integer, real)",
          "Dynamic Animation Links: Fill colors, slider scaling, visibility, size controls",
          "Scripting categories (application scripts, window scripts, key scripts)"
        ]
      },
      {
        name: "Advanced SCADA Features & Communications",
        duration: "Week 2",
        description: "Establishing real-time data highways and alarms standard.",
        topics: [
          "Alarms and Events configuration: Hi-Hi, Hi, Lo, Lo-Lo limits",
          "Real-time and Historical trend graphs rendering",
          "SCADA security setup: User login hierarchy, access levels",
          "Communication protocols: Modbus Serial/TCP, OPC, Profibus",
          "Configuring Driver channels to exchange tags with PLCs (e.g. Wonderware InTouch with Kepware OPC)"
        ]
      }
    ]
  },
  {
    id: "vfd",
    name: "Variable Frequency Drives (VFD) & Motors",
    shortName: "VFD",
    duration: "10 Days",
    syllabus: [
      {
        name: "VFD Fundamentals & Panel Parameterization",
        duration: "Part 1",
        description: "Mastering electric induction speed settings via advanced parameter keys.",
        topics: [
          "VFD Working Principle (AC rectification to DC, PWM inversion)",
          "Interpreting induction motor nameplates & torque characteristics",
          "Parameters setup: Max frequency, acceleration/deceleration ramps, rated current",
          "Keypad speed pot controls vs keypad terminal pushbuttons"
        ]
      },
      {
        name: "External Control Wiring & Custom Integration",
        duration: "Part 2",
        description: "Interfacing speed controllers with manual switches and PLC systems.",
        topics: [
          "External 2-wire and 3-wire control loops wiring",
          "Multi-speed configuration presets with digital input pins",
          "Interfacing analog output card of a PLC (0-10V) to change VFD speed dynamically",
          "VFD status back-signals wiring: fault relays, running feedback indicators"
        ]
      }
    ]
  },
  {
    id: "hmi",
    name: "Human Machine Interfaces (HMI)",
    shortName: "HMI",
    duration: "10 Days",
    syllabus: [
      {
        name: "HMI Screen Design & Communication",
        duration: "Full Module",
        description: "Building physical screen layouts placed on industrial enclosure doors.",
        topics: [
          "HMI vs SCADA comparisons & hardware mounting",
          "Establishing direct serial connection (RS-232 / RS-485 / Ethernet)",
          "Creating multi-window screens and setup screen navigation buttons",
          "Adding numerical entries, status displays, bar meters, and toggle switches",
          "Interfacing HMI with a PLC directly and verifying button actions interactively"
        ]
      }
    ]
  },
  {
    id: "integrated",
    name: "Integrated Industrial Automation Premium Course",
    shortName: "All-in-One",
    duration: "2 - 3 Months",
    syllabus: [
      {
        name: "Complete Automation Suite",
        duration: "Weeks 1 - 10",
        description: "The ultimate program for engineering students to master PLC, SCADA, VFD, HMI, and basic DCS together.",
        topics: [
          "PLC (3-4 major brands of hardware)",
          "SCADA (Wonderware InTouch + Siemens WinCC)",
          "AC Drives & VFD Panel Connections",
          "HMI Graphics Designing and downloading",
          "Familiarization with RTDs, Solenoid valves, Control logic cabinet building",
          "Final fully functional academic project (e.g. Water Level / Temperature / Batching process panel)",
          "Interview grooming: 100+ standard question-and-answers preparation"
        ]
      }
    ]
  }
];

export const PLACEMENTS_GALLERY: StudentPlacement[] = [
  {
    id: "p1",
    name: "M. Durga Rao",
    branch: "B.Tech (ECE)",
    company: "L&T Automation",
    package: "4.2 LPA"
  },
  {
    id: "p2",
    name: "K. Sai Kumar",
    branch: "B.Tech (EEE)",
    company: "Efftronics Systems",
    package: "3.6 LPA"
  },
  {
    id: "p3",
    name: "P. Rajesh",
    branch: "B.Tech (EIE)",
    company: "Siemens India Ltd.",
    package: "4.8 LPA"
  },
  {
    id: "p4",
    name: "T. Anusha",
    branch: "B.Tech (ECE)",
    company: "Wipro Engineering",
    package: "4.0 LPA"
  },
  {
    id: "p5",
    name: "S. K. Imran",
    branch: "B.Tech (EEE)",
    company: "Schneider Electric",
    package: "4.5 LPA"
  },
  {
    id: "p6",
    name: "G. Sandeep",
    branch: "B.Tech (EEE)",
    company: "Sudarshan Chemicals",
    package: "3.8 LPA"
  }
];

export const FAQS_LIST: FAQ[] = [
  {
    question: "Do you provide practical training, or is it mostly classroom coaching?",
    answer: "Our core strength is 100% practical, hands-on lab training. Each student is provided with an individual PLC trainer kit, VFD, and computer station. You write the logic, make the hardwire connections from sensors, and download/verify the program yourself."
  },
  {
    question: "Who can enroll in these automation courses?",
    answer: "Students or graduates with backgrounds in electrical (EEE), electronics (ECE / EIE), mechanical, instrumentation engineering, diploma holders, or working professionals looking to transition into industrial automation, maintenance, and project designing."
  },
  {
    question: "Are the class timings flexible for college students and staff?",
    answer: "Yes, we offer highly flexible timings with multiple batches from 8:00 AM to 8:30 PM. You can choose a slot that matches your college schedule or job hours. We also accommodate weekend-only express batches."
  },
  {
    question: "Do you offer job placement support?",
    answer: "Yes! We have an active placements cell with partnerships in mechanical manufacturing, pharmaceutical plants, software agencies, and power factories across Andhra Pradesh, Telangana, Chennai, and Bangalore. We provide resume polishing and standard mock interview preparation."
  },
  {
    question: "Will I get a certificate at the end of the course?",
    answer: "Absolutely. On successful completion of the course syllabus and laboratory projects, you will receive an ISO-certified Industrial Automation Training Certificate showing your multi-brand PLC, SCADA, and VFD training hours."
  }
];
