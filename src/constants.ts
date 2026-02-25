import { 
  Wifi,
  Network,
  Cable,
  Accessibility,
  AlertCircle,
  MessageSquare,
  BellRing,
  Users,
  Clock,
  Timer
} from 'lucide-react';
import { Category, DocumentItem, ReferenceItem } from './types';

export const LOGO_PATH = '/images/logo.png';

export const COMPANY_NAME = 'Randa Technology';

export const CONTACT_INFO = {
  address: 'Batı Sitesi, 2307. Sk. No:84, 06370 Yenimahalle/Ankara',
  phone: '+90 (312) 472 55 44 Pbx',
  support: '+90 506 559 86 32',
  email: 'info@randa.com.tr',
  mapsUrl: 'https://www.google.com/maps?ll=39.956927,32.693069&z=14&t=m&hl=tr&gl=US&mapclient=embed&cid=15709963255353210736'
};

export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/randatechnology',
  linkedin: 'https://linkedin.com/company/randatechnology',
  youtube: 'https://youtube.com/randatechnology',
  instagram: 'https://instagram.com/randatechnology'
};

export const DOCUMENTS: DocumentItem[] = [
  { id: '1', title: 'Digimat Product Catalog 2024', url: '#', type: 'pdf' },
  { id: '2', title: 'Nurse Call System Installation Guide', url: '#', type: 'pdf' },
  { id: '3', title: 'ISO 9001:2015 Certificate', url: '#', type: 'image' },
  { id: '4', title: 'CE Declaration of Conformity', url: '#', type: 'pdf' },
];

export const REFERENCES: ReferenceItem[] = [
  { id: '1', name: 'City Hospital Ankara', location: 'Ankara, Turkey', category: 'Healthcare' },
  { id: '2', name: 'Grand Plaza Hotel', location: 'Istanbul, Turkey', category: 'Hospitality' },
  { id: '3', name: 'National University Campus', location: 'Izmir, Turkey', category: 'Education' },
  { id: '4', name: 'Industrial Zone Center', location: 'Bursa, Turkey', category: 'Industrial' },
];

export const CATEGORIES: Category[] = [
  {
    id: 'nurse-call',
    name: 'Nurse Call Systems',
    description: 'Innovative IP and Wireless solutions for modern healthcare facilities.',
    subcategories: [
      {
        id: 'wireless-nurse',
        name: 'Wireless Nurse Call System',
        description: 'Flexible and easy to install wireless communication.',
        icon: Wifi,
        image: '/images/subcategories/wireless-nurse.jpg',
        products: [
          { 
            id: 'nurse-station-display', 
            name: 'Nurse Station Display', 
            description: 'Central monitoring unit for all calls.', 
            image: '/images/products/nurse-station-display.jpg',
            features: [
              'Real-time call monitoring',
              'Visual and audible alerts',
              'Staff presence tracking',
              'Emergency call prioritization'
            ],
            specs: {
              'Screen': '7-inch Touchscreen LCD',
              'Resolution': '1024 x 600',
              'Connectivity': 'WiFi 802.11 b/g/n',
              'Power': '12V DC / 2A',
              'Dimensions': '210 x 140 x 30 mm'
            }
          },
          { 
            id: 'nurse-call-button', 
            name: 'Nurse Call Button', 
            description: 'Standard patient call unit.', 
            image: '/images/products/nurse-call-button.jpg',
            features: [
              'Antimicrobial surface',
              'Braille embossed button',
              'LED call confirmation',
              'Easy wall mounting'
            ],
            specs: {
              'Material': 'Antimicrobial ABS',
              'Frequency': '433.92 MHz',
              'Range': 'Up to 100m (Open area)',
              'Battery': 'CR2450 Lithium',
              'Dimensions': '86 x 86 x 15 mm'
            }
          },
          { id: 'handset-call-button', name: 'Handset Call Button', description: 'Ergonomic patient handset.', image: '/images/products/handset-call-button.jpg' },
          { id: 'pullcord-call-button', name: 'Pullcord Call Button', description: 'Emergency pull cord for bathrooms.', image: '/images/products/pullcord-call-button.jpg' },
          { id: 'codeblue-call-button', name: 'Codeblue Call Button', description: 'Critical emergency alert button.', image: '/images/products/codeblue-call-button.jpg' },
          { id: 'over-door-lamp', name: 'Over Door Lamp', description: 'Visual indicator for room status.', image: '/images/products/over-door-lamp.jpg' },
          { id: 'signal-repeater', name: 'Signal Repeater', description: 'Extends wireless coverage.', image: '/images/products/signal-repeater.jpg' },
          { id: 'pager-transmitter', name: 'Pager Transmitter', description: 'Sends alerts to staff pagers.', image: '/images/products/pager-transmitter.jpg' },
          { id: 'pager', name: 'Pager', description: 'Personal alert device for staff.', image: '/images/products/pager.jpg' },
        ]
      },
      {
        id: 'ip-nurse',
        name: 'IP Nurse Call System',
        description: 'Advanced network-based patient monitoring.',
        icon: Network,
        image: '/images/subcategories/ip-nurse.jpg',
        products: [
          { id: 'ip-nurse-station', name: 'Nurse Station Console', description: 'Touchscreen IP console for call management.', image: '/images/products/ip-nurse-station.jpg' },
          { id: 'ip-room-unit', name: 'Room Control Unit', description: 'Intelligent room management module.', image: '/images/products/ip-room-unit.jpg' },
          { id: 'ip-call-reset', name: 'Call And Reset Button', description: 'Integrated call and reset unit.', image: '/images/products/ip-call-reset.jpg' },
          { id: 'ip-handset', name: 'Handset Call Button', description: 'IP-based patient handset.', image: '/images/products/ip-handset.jpg' },
          { id: 'ip-wc-pullcord', name: 'Wc Pull Cord Button', description: 'IP emergency pull cord.', image: '/images/products/ip-wc-pullcord.jpg' },
          { id: 'ip-warning-lamp', name: 'Warning Lamp', description: 'Multi-color IP status indicator.', image: '/images/products/ip-warning-lamp.jpg' },
          { id: 'ip-server', name: 'Hospital Call System Server', description: 'Central management software and server.', image: '/images/products/ip-server.jpg' },
        ]
      },
      {
        id: 'analog-nurse',
        name: 'Analog Wired Nurse Call System',
        description: 'Reliable traditional wired solutions.',
        icon: Cable,
        image: '/images/subcategories/analog-nurse.jpg',
        products: [
          { id: 'analog-display', name: 'Nurse Call Display', description: 'Traditional LED call display.', image: '/images/products/analog-display.jpg' },
          { id: 'analog-bedside', name: 'Bedside Call Button', description: 'Wired bedside call unit.', image: '/images/products/analog-bedside.jpg' },
          { id: 'analog-handle', name: 'Handle Call Button', description: 'Traditional patient handle.', image: '/images/products/analog-handle.jpg' },
          { id: 'analog-reset', name: 'Reset Button', description: 'Manual call reset unit.', image: '/images/products/analog-reset.jpg' },
          { id: 'analog-pullcord', name: 'Emergency Pull Cord Button', description: 'Wired emergency pull cord.', image: '/images/products/analog-pullcord.jpg' },
          { id: 'analog-corridor', name: 'Corridor Light', description: 'Simple visual room indicator.', image: '/images/products/analog-corridor.jpg' },
          { id: 'analog-room-unit', name: 'Room Control Unit', description: 'Analog room control module.', image: '/images/products/analog-room-unit.jpg' },
          { id: 'analog-extender', name: 'Range Extender Module', description: 'Signal booster for long cable runs.', image: '/images/products/analog-extender.jpg' },
        ]
      }
    ]
  },
  {
    id: 'disabled-toilet',
    name: 'Disabled Toilet Alarm',
    description: 'Safety and accessibility solutions for public and private facilities.',
    subcategories: [
      {
        id: 'wireless-toilet',
        name: 'Wireless Accessible Toilet Alarm',
        description: 'Quick-install emergency alert systems.',
        icon: Accessibility,
        image: '/images/subcategories/wireless-toilet.jpg',
        products: [
          { id: 'wt-display', name: 'Toilet Alarm Display', description: 'Central alarm monitoring display.', image: '/images/products/wt-display.jpg' },
          { id: 'wt-panic', name: 'Disabled Panic Button', description: 'Wall-mounted panic button.', image: '/images/products/wt-panic.jpg' },
          { id: 'wt-pullcord', name: 'Disabled Pull-Cord Call Button', description: 'Emergency pull cord.', image: '/images/products/wt-pullcord.jpg' },
          { id: 'wt-lamp', name: 'Disabled Warning Lamp', description: 'External warning indicator.', image: '/images/products/wt-lamp.jpg' },
          { id: 'wt-repeater', name: 'Signal Repeater', description: 'Wireless range extender.', image: '/images/products/wt-repeater.jpg' },
        ]
      },
      {
        id: 'wired-toilet',
        name: 'Wired Disabled Toilet Alarm',
        description: 'Standard wired emergency pull-cord systems.',
        icon: Cable,
        image: '/images/subcategories/wired-toilet.jpg',
        products: [
          { id: 'wired-t-display', name: 'Toilet Alarm Display', description: 'Wired central display.', image: '/images/products/wired-t-display.jpg' },
          { id: 'wired-t-pullcord', name: 'Disabled Pull-Cord Call Button', description: 'Wired emergency pull cord.', image: '/images/products/wired-t-pullcord.jpg' },
          { id: 'wired-t-reset', name: 'Call Reset Button', description: 'Manual reset button.', image: '/images/products/wired-t-reset.jpg' },
          { id: 'wired-t-lamp', name: 'Disabled Warning Lamp', description: 'Wired warning lamp.', image: '/images/products/wired-t-lamp.jpg' },
          { id: 'wired-t-module', name: 'Addressing Module', description: 'System identification module.', image: '/images/products/wired-t-module.jpg' },
          { id: 'wired-t-power', name: 'Power Supply', description: 'System power unit.', image: '/images/products/wired-t-power.jpg' },
        ]
      },
      {
        id: 'emergency-kit',
        name: 'Emergency Assist Alarm Kit',
        description: 'Complete all-in-one emergency kits.',
        icon: AlertCircle,
        image: '/images/subcategories/emergency-kit.jpg',
        products: [
          { id: 'kit-pullcord', name: 'Disabled Pull-Cord Call Button', description: 'Kit emergency pull cord.', image: '/images/products/kit-pullcord.jpg' },
          { id: 'kit-lamp', name: 'Disabled Warning Lamp', description: 'Kit warning lamp.', image: '/images/products/kit-lamp.jpg' },
        ]
      }
    ]
  },
  {
    id: 'wireless-paging',
    name: 'Wireless Paging',
    description: 'Instant communication for staff and emergency response.',
    subcategories: [
      {
        id: 'staff-paging',
        name: 'Wireless Staff Calling System',
        description: 'Efficient internal communication for teams.',
        icon: MessageSquare,
        image: '/images/subcategories/staff-paging.jpg',
        products: [
          { id: 'paging-display', name: 'Three Lines Display', description: 'Multi-call display unit.', image: '/images/products/paging-display.jpg' },
          { id: 'paging-call', name: 'Call Button', description: 'Wireless call transmitter.', image: '/images/products/paging-call.jpg' },
          { id: 'paging-reset', name: 'Reset Button', description: 'Wireless reset transmitter.', image: '/images/products/paging-reset.jpg' },
          { id: 'paging-lamp', name: 'Warning Lamp', description: 'Visual alert indicator.', image: '/images/products/paging-lamp.jpg' },
          { id: 'paging-repeater', name: 'Signal Repeater', description: 'Range extender.', image: '/images/products/paging-repeater.jpg' },
          { id: 'paging-transmitter', name: 'Pager Transmitter', description: 'Base station for pagers.', image: '/images/products/paging-transmitter.jpg' },
          { id: 'paging-bell', name: 'Three Buttons Bell', description: 'Multi-function call bell.', image: '/images/products/paging-bell.jpg' },
          { id: 'paging-watch', name: 'Watch Pager', description: 'Wearable alert device.', image: '/images/products/paging-watch.jpg' },
        ]
      },
      {
        id: 'emergency-codes',
        name: 'Hospital Emergency Codes',
        description: 'Critical alert systems for medical emergencies.',
        icon: BellRing,
        image: '/images/subcategories/emergency-codes.jpg',
        products: [
          { id: 'code-blue', name: 'Code Blue', description: 'Cardiac arrest alert system.', image: '/images/products/code-blue.jpg' },
          { id: 'code-white', name: 'Code White', description: 'Security/Aggression alert system.', image: '/images/products/code-white.jpg' },
          { id: 'code-pink', name: 'Code Pink', description: 'Infant abduction alert system.', image: '/images/products/code-pink.jpg' },
          { id: 'code-red', name: 'Code Red', description: 'Fire emergency alert system.', image: '/images/products/code-red.jpg' },
          { id: 'code-doctor', name: 'Consultation Doctor Calls', description: 'Staff consultation request system.', image: '/images/products/code-doctor.jpg' },
        ]
      }
    ]
  },
  {
    id: 'queue-systems',
    name: 'Queue Systems',
    description: 'Optimize customer flow and reduce perceived wait times.',
    subcategories: [
      {
        id: 'electronic-queue',
        name: 'Electronic Queue Management System',
        description: 'Digital ticketing and display solutions.',
        icon: Users,
        image: '/images/subcategories/electronic-queue.jpg',
        products: [
          { id: 'q-kiosk', name: 'Ticket Dispenser Kiosk', description: 'Touchscreen ticketing unit.', image: '/images/products/q-kiosk.jpg' },
          { id: 'q-area-led', name: 'Waiting Area Led Display', description: 'Main queue status display.', image: '/images/products/q-area-led.jpg' },
          { id: 'q-counter-led', name: 'Counter Led Display', description: 'Individual counter display.', image: '/images/products/q-counter-led.jpg' },
          { id: 'q-keypad', name: 'Keypad Call Terminal', description: 'Staff calling unit.', image: '/images/products/q-keypad.jpg' },
          { id: 'q-signage', name: 'Waiting Area Digital Signage', description: 'Multimedia queue display.', image: '/images/products/q-signage.jpg' },
          { id: 'q-counter-lcd', name: 'Counter Lcd Display', description: 'Advanced counter display.', image: '/images/products/q-counter-lcd.jpg' },
          { id: 'q-software', name: 'Virtual Calling Software', description: 'PC-based calling terminal.', image: '/images/products/q-software.jpg' },
        ]
      }
    ]
  },
  {
    id: 'clock-systems',
    name: 'Synchronized Clocks',
    description: 'Precision timing for hospitals, schools, and industrial sites.',
    subcategories: [
      {
        id: 'poe-clock',
        name: 'PoE NTP Master Clock System',
        description: 'Network-synced precision timing.',
        icon: Clock,
        image: '/images/subcategories/poe-clock.jpg',
        products: [
          { id: 'poe-server', name: 'Poe Clocks NTP Server', description: 'Central time synchronization server.', image: '/images/products/poe-server.jpg' },
          { id: 'poe-analog-s', name: 'Single-Face Analog Clock', description: 'PoE powered analog clock.', image: '/images/products/poe-analog-s.jpg' },
          { id: 'poe-analog-d', name: 'Double-Face Analog Clock', description: 'Dual-sided PoE analog clock.', image: '/images/products/poe-analog-d.jpg' },
          { id: 'poe-digital-s', name: 'Single-Face Digital Clock', description: 'PoE powered digital clock.', image: '/images/products/poe-digital-s.jpg' },
          { id: 'poe-digital-d', name: 'Double-Face Digital Clock', description: 'Dual-sided PoE digital clock.', image: '/images/products/poe-digital-d.jpg' },
          { id: 'poe-digital-7', name: '7 Segment Poe Digital Clock', description: 'Classic 7-segment PoE display.', image: '/images/products/poe-digital-7.jpg' },
          { id: 'poe-op-room', name: 'Operation Room Clock', description: 'Specialized surgical timer/clock.', image: '/images/products/poe-op-room.jpg' },
        ]
      },
      {
        id: 'wireless-clock',
        name: 'Wireless Synchronized Clock System',
        description: 'Easy-to-deploy synchronized timekeeping.',
        icon: Timer,
        image: '/images/subcategories/wireless-clock.jpg',
        products: [
          { id: 'w-main-unit', name: 'Main Clock Unit', description: 'Wireless master clock controller.', image: '/images/products/w-main-unit.jpg' },
          { id: 'w-digital-s', name: 'Single-Side Digital Clock', description: 'Wireless digital clock.', image: '/images/products/w-digital-s.jpg' },
          { id: 'w-digital-d', name: 'Double-Side Digital Clock', description: 'Dual-sided wireless digital clock.', image: '/images/products/w-digital-d.jpg' },
        ]
      }
    ]
  }
];
