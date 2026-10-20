export interface Project {
  id: string;    // used as image filename 
  name: string;  // card title
  city: string;  // location line
  cat: string;   // category badge 
  v: string;     // value in place (hover stat)
  dur: string;   // duration (hover stat)
  scope: string; // scope (hover stat)
}

export interface Leader {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export const leaders: Leader[] = [
  { 
    name: "Engr. Opeoluwa Oloyede", 
    role: "Group Managing Director",    
    bio: "HND · PGD · M.Eng · MNSE. Structures and design authority across every discipline.",                          
    image: "/leadership/Ope.JPG"
  },
  {
    name: "Mr. A. O. Ogundalu",
    role: "Executive Director",
    bio: "BSc · MBA · PhD · MNSE. Leads the firm across consulting, construction, and development.",
    image: "",
  },
  {
    name: "Mr. O. N. Hotonu",
    role: "Director, Structures",
    bio: "BSc · MSc · FNSE · FNIstructE · Mni. Structural authority on the work the firm designs and builds.",
    image: "",
  },
  {
    name: "Mr. A. A. Fari",
    role: "Director, Quantity Surveying",
    bio: "BSc · MSc · MNIQS. Cost, measurement, and commercial control from estimate to final account.",
    image: "",
  },
  {
    name: "Mr. Gbenga Kehinde",
    role: "Director, Architecture",
    bio: "BSc · MSc (Arch). Residential, commercial, and mixed-use design from brief to built form.",
    image: "",
  },
]

export const projects: Project[] = [
  {
    id: "proj-ikoyi-sanctuary",
    name: "Ikoyi Baptist Church Sanctuary",
    city: "Ikoyi, Lagos",
    cat: "Consultancy",
    v: "₦800M",
    dur: "36 months",
    scope: "Structural design & QS",
  },
  {
    id: "proj-surulere-complex",
    name: "New Estate Baptist Education Complex",
    city: "Surulere, Lagos",
    cat: "Building",
    v: "₦200M",
    dur: "18 months",
    scope: "Completed 1996",
  },
  {
    id: "proj-skywater",
    name: "Skywater Tower",
    city: "Ikeja, Lagos",
    cat: "Building",
    v: "₦400M",
    dur: "28 months",
    scope: "7 storeys",
  },
  {
    id: "proj-milestones",
    name: "Construction of Residential Development at Block III",
    city: "Plot 60, akin-Ogunmade Davies Close Gbagada Scheme, Gbagada, Lagos",
    cat: "Building",
    v: "₦200M",
    dur: "16 months",
    scope: "Household structure",
  },
  {
    id: "proj-vgc-residence",
    name: "Private Residence, VGC",
    city: "Ajah, Lagos",
    cat: "Property",
    v: "₦36M",
    dur: "12 months",
    scope: "1-storey dwelling",
  },
  {
    id: "proj-gra-flats",
    name: "Block of Flats, G.R.A",
    city: "Ikeja, Lagos",
    cat: "Property",
    v: "₦220M",
    dur: "14 months",
    scope: "2-storey walk-up",
  },
]