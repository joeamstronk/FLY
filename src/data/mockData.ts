import { Project, GalleryItem, TeamMember, Milestone, NewsArticle } from '../types';

import heroImg from '../assets/images/hero_cinematic_studio_1792138788082.jpg';
import aboutSetImg from '../assets/images/about_production_set_1792138789233.jpg';
import commercialCarImg from '../assets/images/portfolio_commercial_car_1792138789397.jpg';
import fashionEditorialImg from '../assets/images/portfolio_fashion_editorial_1792138788889.jpg';
import architectureVillaImg from '../assets/images/portfolio_architecture_villa_1792138789628.jpg';

export const ASSETS = {
  hero: heroImg,
  aboutSet: aboutSetImg,
  commercialCar: commercialCarImg,
  fashionEditorial: fashionEditorialImg,
  architectureVilla: architectureVillaImg,
};

export const CLIENT_LOGOS = [
  { name: 'VOGUE', descriptor: 'Editorial & Haute Couture' },
  { name: 'ARCHITECTURAL DIGEST', descriptor: 'Spatial & Living' },
  { name: 'PORSCHE', descriptor: 'Automotive Motion' },
  { name: 'BANG & OLUFSEN', descriptor: 'Acoustic Product Design' },
  { name: 'SOTHEBY’S', descriptor: 'International Realty' },
  { name: 'LEICA CAMERA', descriptor: 'Optics & Visual Craft' },
  { name: 'TESLA MOTORS', descriptor: 'Industrial Innovation' },
  { name: 'AESOP', descriptor: 'Brand Narrative & Stills' },
];

export const GALLERY_ROWS: {
  rowTitle: string;
  rowDescription: string;
  items: GalleryItem[];
}[] = [
  {
    rowTitle: 'Row 01 · Cinematic Commercials & Motion',
    rowDescription: 'High-speed motion control, anamorphic optics, and atmospheric lighting designed for global broadcast.',
    items: [
      {
        id: 'g-1',
        title: 'Project Apex · McLaren GT',
        subtitle: 'Automotive Commercial · 60s Broadcast',
        image: commercialCarImg,
        description: 'Captured in brutalist concrete architecture at golden hour with ARRI Alexa 35 and Cooke Anamorphic /i.',
        category: 'Commercial',
        exif: { shutter: '1/48s', aperture: 'T2.3', iso: '800', focal: '40mm Anamorphic' },
      },
      {
        id: 'g-2',
        title: 'Sound Sculpture · B&O BeoLab',
        subtitle: 'Industrial Design Cinema',
        image: heroImg,
        description: 'Precision macro cinematography spotlighting anodized aluminium acoustic lattices under tungsten key light.',
        category: 'Commercial',
        exif: { shutter: '1/50s', aperture: 'f/2.8', iso: '400', focal: '90mm Macro' },
      },
      {
        id: 'g-3',
        title: 'Chronograph Velocity · Zenith',
        subtitle: 'Luxury Timepiece Campaign',
        image: commercialCarImg,
        description: 'High-frame-rate 120fps fluid motion highlighting diamond-cut escapements and titanium bezels.',
        category: 'Commercial',
        exif: { shutter: '1/250s', aperture: 'f/4.0', iso: '320', focal: '100mm Macro' },
      },
    ],
  },
  {
    rowTitle: 'Row 02 · Architectural Monoliths & Interiors',
    rowDescription: 'Twilight exposures, balanced interior ambient illumination, and precise perspective correction for iconic structures.',
    items: [
      {
        id: 'g-4',
        title: 'Villa Obsidian · Aegean Coast',
        subtitle: 'Cantilever Concrete Residence',
        image: architectureVillaImg,
        description: 'Twilight exterior exposure balancing warm incandescent interior zones against deep lapis sea reflections.',
        category: 'Architecture',
        exif: { shutter: '1.2s', aperture: 'f/8.0', iso: '100', focal: '24mm Tilt-Shift' },
      },
      {
        id: 'g-5',
        title: 'The Concrete Pavilion · Kyoto',
        subtitle: 'Museum & Tea Pavilion',
        image: architectureVillaImg,
        description: 'Minimalist shadow studies emphasizing board-formed concrete textures and natural moss stone courtyards.',
        category: 'Architecture',
        exif: { shutter: '1/15s', aperture: 'f/11', iso: '100', focal: '17mm Tilt-Shift' },
      },
      {
        id: 'g-6',
        title: 'Skyline Penthouse · Tribeca',
        subtitle: 'Private High-Rise Sanctuary',
        image: heroImg,
        description: 'Dual-exposure dusk interior composition capturing city light trails without blowing warm timber tones.',
        category: 'Architecture',
        exif: { shutter: '2.5s', aperture: 'f/9.0', iso: '100', focal: '35mm Prime' },
      },
    ],
  },
  {
    rowTitle: 'Row 03 · Editorial, Haute Couture & Portraits',
    rowDescription: 'Bold sculptural silhouettes, directional studio contrast, and tactile medium-format human emotion.',
    items: [
      {
        id: 'g-7',
        title: 'Monolith Silhouette · Paris Autumn',
        subtitle: 'Vogue France Cover Editorial',
        image: fashionEditorialImg,
        description: 'Stark single-source hard key light casting dramatic architectural shadows on pleated architectural drapery.',
        category: 'Fashion',
        exif: { shutter: '1/160s', aperture: 'f/5.6', iso: '100', focal: '80mm Hasselblad' },
      },
      {
        id: 'g-8',
        title: 'The Director’s Method · Studio 4',
        subtitle: 'Artisan Documentary Portrait',
        image: aboutSetImg,
        description: 'Behind-the-lens candid document of film blocking under custom softbox grids in our Los Angeles stage.',
        category: 'Editorial',
        exif: { shutter: '1/125s', aperture: 'f/2.0', iso: '640', focal: '50mm Summilux' },
      },
      {
        id: 'g-9',
        title: 'Silent Form · Architectural Portraiture',
        subtitle: 'Monochrome Study No. 04',
        image: fashionEditorialImg,
        description: 'Geometric composition harmonizing human posture with brutalist fluted column geometries.',
        category: 'Editorial',
        exif: { shutter: '1/200s', aperture: 'f/4.0', iso: '100', focal: '110mm Medium Format' },
      },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'mclaren-gt-apex',
    title: 'Velocity in Concrete',
    client: 'McLaren Automotive & Studio OMA',
    category: 'commercial',
    categoryLabel: 'Commercial & Motion',
    year: 2026,
    image: commercialCarImg,
    shortDesc: 'A high-impact cinematic film still and 4K commercial capturing hypercar aerodynamics against brutalist raw architecture.',
    fullDesc: 'Commissioned by McLaren Automotive to celebrate their flagship grand tourer alongside modern European brutalist architecture. The production required 3 nights of closed-access filming, bespoke vehicle tracking rigs, and custom high-output LED lighting grids to sculpt reflections along carbon-fiber contours.',
    deliverables: ['60-second Broadcast Spot', '10 Medium-Format Campaign Stills', 'Social Cutdowns (9:16 & 4:5)', 'Behind-the-Scenes Short Film'],
    equipment: {
      camera: 'ARRI Alexa 35 & Phantom Flex 4K',
      lenses: 'Cooke Anamorphic /i Full Frame Plus',
      lighting: 'ARRI SkyPanel S360-C & Astera Titan Tubes',
    },
    location: 'Valencia & Berlin Monolith Pavilions',
    testimonial: {
      quote: 'FLY’s understanding of automotive surface reflection and kinetic pacing elevated our global launch to an art form.',
      author: 'Julian Meyer',
      role: 'Global Creative Lead, McLaren',
    },
  },
  {
    id: 'villa-obsidian-aegean',
    title: 'The Cantilever Sanctuary',
    client: 'K-Studio & Sotheby’s International',
    category: 'architecture',
    categoryLabel: 'Architecture & Property',
    year: 2025,
    image: architectureVillaImg,
    shortDesc: 'Comprehensive architectural photography and 4K twilight drone cinematography for a cliffside concrete estate.',
    fullDesc: 'Over seven days of meticulous natural light observation, our architectural team charted the sun path across this 800-square-meter cliffside monolith. The final portfolio captures dawn mist, high-noon brutalist shadow cast, and the golden hour twilight transition when internal warmth radiates against the Aegean sea.',
    deliverables: ['36 Archival Architectural Prints', '3-minute Spatial Cinema Tour', 'Aerial LiDAR Survey & Drone Reel', 'Coffee Table Monograph Book'],
    equipment: {
      camera: 'Phase One IQ4 150MP & Hasselblad H6D-100c',
      lenses: 'Rodenstock HR Digaron & Canon TS-E 17mm/24mm',
      lighting: 'Ambient Twilight + Aputure 600d Pro Accents',
    },
    location: 'Peloponnese, Greece',
    testimonial: {
      quote: 'They did not just photograph the building; they translated our architectural philosophy into light and tactile resonance.',
      author: 'Elena Dimitriou',
      role: 'Principal Architect, K-Studio',
    },
  },
  {
    id: 'vogue-paris-sculpture',
    title: 'Architectonic Drapery',
    client: 'Vogue France / Maison Margiela',
    category: 'fashion',
    categoryLabel: 'Fashion & Editorial',
    year: 2025,
    image: fashionEditorialImg,
    shortDesc: 'Avant-garde high fashion series contrasting structural origami garments with stark studio geometric shadows.',
    fullDesc: 'Created in collaboration with Parisian fashion directors, this editorial explored the intersection of Japanese architectural folding techniques and haute couture fabrics. Shot entirely on medium-format black-and-white digital sensors with razor-thin optical depths.',
    deliverables: ['14-Page Editorial Spread', 'Digital Exhibition Assets', 'Editorial Motion Teasers', 'Gallery Fine-Art Archival Proofs'],
    equipment: {
      camera: 'Hasselblad 907X 50C & Leica S3',
      lenses: 'Hasselblad XCD 80mm f/1.9 & 45mm f/4',
      lighting: 'Broncolor Para 222 FB & Move 1200L Pack',
    },
    location: 'Studio Marais, Paris',
    testimonial: {
      quote: 'FLY brings a rare cinematic gravity to fashion that strips away artifice and celebrates pure line and form.',
      author: 'Chloe de Laurent',
      role: 'Senior Fashion Editor, Vogue',
    },
  },
  {
    id: 'cinema-directors-cut',
    title: 'The Director’s Space',
    client: 'FLY Original Studio Production',
    category: 'film',
    categoryLabel: 'Motion & Film',
    year: 2024,
    image: aboutSetImg,
    shortDesc: 'Behind-the-scenes documentary series detailing the obsessive craft of optical cinema and physical set design.',
    fullDesc: 'An intimate multi-part film examining how legendary set builders, lighting gaffers, and directors collaborate in real-time. Shot with natural dialogue, immersive sound design, and unrestrained tactile textures of film production equipment.',
    deliverables: ['24-minute Documentary Short', 'Film Festival Master DCP', 'Production Stills Archive (120 Stills)', 'Vinyl Soundtrack Packaging Stills'],
    equipment: {
      camera: 'ARRI Alexa Mini LF & 35mm Panaflex Film Camera',
      lenses: 'Panavision Primo Primes & Cooke Speed Panchro',
      lighting: 'Tungsten Mole-Richardson 5K Fresnels & Litegear',
    },
    location: 'Stage 4, Los Angeles, California',
  },
  {
    id: 'sound-monolith-beo',
    title: 'Acoustic Architecture',
    client: 'Bang & Olufsen International',
    category: 'commercial',
    categoryLabel: 'Commercial & Brand',
    year: 2024,
    image: heroImg,
    shortDesc: 'Macro cinematography and tactile still life capturing anodized aluminum acoustic lattices and acoustic silk.',
    fullDesc: 'A poetic exploration of industrial acoustics. We built bespoke micro-tracking rails to pass within millimeters of speaker frets while soundwaves created subtle atmospheric air ripples in slow-motion mist.',
    deliverables: ['Global Brand Commercial (30s & 60s)', 'High-Resolution Retail Display Stills', 'Interactive Product Stills for Web', 'Packaging Master Key-Art'],
    equipment: {
      camera: 'RED V-Raptor XL 8K & Laowa Probe 24mm',
      lenses: 'Leica Cine Macro 90mm & Master Primes',
      lighting: 'Kino Flo Freestyle & Profoto Pro-11 Generators',
    },
    location: 'Copenhagen & FLY LA Stage',
  },
];

export const MILESTONES: Milestone[] = [
  {
    year: '2009',
    title: 'The Industrial Loft Inception',
    description: 'Founded by two passionate cinematographers in a converted brick loft in downtown Los Angeles, equipped with manual 35mm cameras, a physical darkroom, and an unyielding commitment to organic light.',
    tag: 'Founding Year',
  },
  {
    year: '2013',
    title: 'Commercial & Automotive Division',
    description: 'Secured first nationwide automotive broadcast campaign. Pioneered high-speed camera tracking and custom parabolic lighting rigs tailored for sculpted metallic surfaces.',
    tag: 'Commercial Expansion',
  },
  {
    year: '2017',
    title: 'International Documentary Unit',
    description: 'Expanded global operations to London and Tokyo. Produced festival-awarded cultural and architectural documentary features using large-format ARRI systems.',
    tag: 'Global Reach',
  },
  {
    year: '2021',
    title: 'Spatial Architecture & Aerial Division',
    description: 'Established dedicated architectural imaging studio utilizing high-resolution medium format, precision tilt-shift glass, and certified heavy-lift cinema drones.',
    tag: 'Spatial Innovation',
  },
  {
    year: '2024',
    title: 'Cannes Corporate & Red Dot Honors',
    description: 'Awarded Gold Dolphin at the Cannes Corporate Media & TV Awards and Red Dot Best of the Best for luxury commercial direction.',
    tag: 'Global Recognition',
  },
  {
    year: '2026',
    title: 'Virtual Production & Next-Gen Optics',
    description: 'Inaugurated our 12,000 sq ft LED volume virtual production soundstage and advanced 16-bit ACES color mastering suite.',
    tag: 'Present Milestone',
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'marcus-vance',
    name: 'Marcus Vance',
    role: 'Co-Founder & Director of Photography',
    specialty: 'Large-Format Cinematography & Kinetic Lighting',
    experienceYears: 17,
    bio: 'Marcus has helmed global campaigns for leading automotive, technology, and luxury houses. Member of the International Cinematographers Guild, he champions the tactile relationship between organic glass and digital sensors.',
    gearPreference: 'ARRI Alexa 35, Cooke Anamorphic /i, Mole-Richardson Tungsten',
    signatureWork: 'Project Apex (McLaren), Silence in Motion',
  },
  {
    id: 'elena-rostova',
    name: 'Elena Rostova',
    role: 'Lead Architectural & Spatial Photographer',
    specialty: 'Twilight Long Exposures & Perspective Control',
    experienceYears: 14,
    bio: 'Trained in architecture at ETH Zurich before dedicating her lens to contemporary structures. Elena works with the world’s most celebrated architects to document residential marvels and monumental public spaces.',
    gearPreference: 'Phase One IQ4 150MP, Rodenstock HR Digaron, Canon TS-E',
    signatureWork: 'Villa Obsidian, The Kyoto Monoliths',
  },
  {
    id: 'julian-thorne',
    name: 'Julian Thorne',
    role: 'Executive Creative Director',
    specialty: 'Narrative Direction & Commercial Concept Design',
    experienceYears: 15,
    bio: 'Former senior creative director at BBDO and Ogilvy, Julian oversees every script, storyboard, and aesthetic treatment to ensure brands leave an indelible cultural imprint.',
    gearPreference: 'Leica M11 Monochrom, Hasselblad 907X',
    signatureWork: 'Acoustic Architecture (Bang & Olufsen)',
  },
  {
    id: 'maya-lin',
    name: 'Maya Lin',
    role: 'Senior Aerial Cinematographer & Drone Pilot',
    specialty: 'Heavy-Lift Cinema Drones & High-G Kinetic Flight',
    experienceYears: 9,
    bio: 'FAA Part 107 and EASA certified flight commander. Maya operates heavy-lift hexacopters bearing full cinema camera packages across mountain ridges, open oceans, and tight urban canyons.',
    gearPreference: 'Freefly Alta X, DJI Inspire 3, RED V-Raptor 8K',
    signatureWork: 'Aegean Sea Cliff Surveys, Alpine Drift',
  },
  {
    id: 'soren-kjaer',
    name: 'Soren Kjaer',
    role: 'Master Colorist & Head of Post-Production',
    specialty: 'Film Emulation, ACES Color Science & HDR Mastering',
    experienceYears: 12,
    bio: 'Soren crafts custom film print lookup tables (LUTs) calibrated to vintage Kodak 5219 and 250D stocks, delivering an unmistakable organic richness to modern high-resolution deliverables.',
    gearPreference: 'DaVinci Resolve Advanced Panel, Flanders Scientific XM310K',
    signatureWork: 'Vogue Haute Couture, Scandinavian Monograph',
  },
];

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: 'news-1',
    title: 'The Architecture of Twilight: Timing the 18-Minute Aegean Window',
    slug: 'architecture-of-twilight-aegean-window',
    date: 'March 28, 2026',
    readTime: '6 min read',
    category: 'Behind The Scenes',
    excerpt: 'How our architectural unit waited six days on a Greek cliffside to capture the precise balanced luminosity between incandescent interior glow and deep cobalt sea.',
    content: [
      'In architectural photography, there is a legendary window called the astronomical twilight balance. For approximately 18 minutes, the ambient falling skylight equals the exact candlepower of calibrated interior warm tungsten lamps.',
      'During our shoot for Villa Obsidian in the Peloponnese, weather fluctuations from Aegean thermals kept delaying our window. Our team mapped solar azimuth with spatial LiDAR models, pre-setting three medium-format rigs at varying elevations.',
      'When the moment arrived, not a word was spoken on set. The resulting exposure achieved a dynamic range of 15 stops without composite artificial HDR tricks—pure photographic honesty.',
    ],
    author: {
      name: 'Elena Rostova',
      role: 'Lead Architectural Photographer',
    },
    image: architectureVillaImg,
  },
  {
    id: 'news-2',
    title: 'Why Large-Format Anamorphic Glass Still Reigns in 2026 Commercials',
    slug: 'why-large-format-anamorphic-glass-reigns',
    date: 'February 14, 2026',
    readTime: '5 min read',
    category: 'Gear & Tech',
    excerpt: 'Despite the rise of synthetic computer-generated imagery, tangible physical glass coatings, organic flares, and natural falloff remain irreplaceable.',
    content: [
      'Every generation of digital sensors grows cleaner, sharper, and more clinical. But human perception yearns for imperfection, falloff, and tactile texture.',
      'On our recent automotive campaign with McLaren, we paired the new ARRI Alexa 35 with vintage-rehousing Cooke Anamorphics. The subtle barrel distortion around the frame edges guides the viewer’s eye directly to the vehicle’s aerodynamic contours.',
      'Technology should serve emotion, not resolution charts.',
    ],
    author: {
      name: 'Marcus Vance',
      role: 'Director of Photography',
    },
    image: commercialCarImg,
  },
  {
    id: 'news-3',
    title: 'FLY Wins Best Cinematography at 2026 Commercial Craft Awards',
    slug: 'fly-wins-commercial-craft-awards-2026',
    date: 'January 19, 2026',
    readTime: '4 min read',
    category: 'Studio News',
    excerpt: 'Honored for our commercial film "Sound Sculpture" in Copenhagen, recognizing technical excellence and audio-visual synchronization.',
    content: [
      'Last night in London, the Association of Commercial Producers bestowed the Gold Award for Best Cinematography upon FLY — fill your moment.',
      'The winning piece, created for Bang & Olufsen, utilized custom microscopic camera tracks that moved inside acoustic chambers. We thank our visionary clients and our dedicated studio team who spent weeks fabricating custom macro optics.',
    ],
    author: {
      name: 'Julian Thorne',
      role: 'Executive Creative Director',
    },
    image: heroImg,
  },
  {
    id: 'news-4',
    title: 'Mastering Minimalist Studio Contrast: The Art of Subtraction',
    slug: 'mastering-minimalist-studio-contrast',
    date: 'December 04, 2025',
    readTime: '7 min read',
    category: 'Industry Insights',
    excerpt: 'Many lighting setups fail because directors add too many fixtures. Discover how we sculpted our latest high-fashion editorial using a single key source.',
    content: [
      'In high-end editorial and portraiture, subtraction is the ultimate luxury. When you remove fill lights, negative fill and black velvet flags take over.',
      'For our Vogue Paris series, we placed a single Broncolor Para 222 FB nine meters above the model on a massive industrial boom arm. The resulting falloff behaves like natural north-facing cathedral window light.',
      'Shadows tell the story that light merely introduces.',
    ],
    author: {
      name: 'Elena Rostova & Soren Kjaer',
      role: 'Visual Direction Team',
    },
    image: fashionEditorialImg,
  },
];
