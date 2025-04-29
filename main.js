const employees = [
    {
      id: 1,
      firstName: "Jean",
      lastName: "Dupont",
      age: 32,
      department: "Développement",
      position: "Développeur Fullstack",
      salary: 55000,
      skills: ["JavaScript", "React", "Node.js", "MongoDB"],
      joinDate: "2019-05-15",
      email: "jean.dupont@company.com",
      projects: ["Project Alpha", "Project Gamma"],
      isActive: true,
      languages: ["French", "English"]
    },
    {
      id: 2,
      firstName: "Marie",
      lastName: "Martin",
      age: 28,
      department: "Design",
      position: "UI/UX Designer",
      salary: 48000,
      skills: ["Figma", "Adobe XD", "Photoshop", "User Research"],
      joinDate: "2020-02-10",
      email: "marie.martin@company.com",
      projects: ["Project Beta", "Project Gamma"],
      isActive: true,
      languages: ["French", "Spanish"]
    },
    {
      id: 3,
      firstName: "Pierre",
      lastName: "Bernard",
      age: 45,
      department: "Management",
      position: "Chef de projet",
      salary: 65000,
      skills: ["Agile", "Scrum", "JIRA", "Project Planning"],
      joinDate: "2017-11-22",
      email: "pierre.bernard@company.com",
      projects: ["Project Alpha", "Project Beta", "Project Delta"],
      isActive: true,
      languages: ["French", "English", "German"]
    },
    {
      id: 4,
      firstName: "Thomas",
      lastName: "Petit",
      age: 29,
      department: "Développement",
      position: "Développeur Frontend",
      salary: 52000,
      skills: ["React", "TypeScript", "CSS", "Jest"],
      joinDate: "2020-08-14",
      email: "thomas.petit@company.com",
      projects: ["Project Gamma", "Project Epsilon"],
      isActive: true,
      languages: ["French", "English"]
    },
    {
      id: 5,
      firstName: "Camille",
      lastName: "Leroux",
      age: 35,
      department: "Marketing",
      position: "Chef de produit",
      salary: 58000,
      skills: ["Market Research", "Product Strategy", "Roadmapping"],
      joinDate: "2018-06-03",
      email: "camille.leroux@company.com",
      projects: ["Project Alpha", "Project Delta"],
      isActive: false,
      languages: ["French", "English", "Spanish"]
    },
    {
      id: 6,
      firstName: "Antoine",
      lastName: "Moreau",
      age: 27,
      department: "Développement",
      position: "Développeur Backend",
      salary: 53000,
      skills: ["Python", "Django", "PostgreSQL", "Docker"],
      joinDate: "2021-03-18",
      email: "antoine.moreau@company.com",
      projects: ["Project Beta", "Project Delta"],
      isActive: true,
      languages: ["French", "English"]
    },
    {
      id: 7,
      firstName: "Élodie",
      lastName: "Simon",
      age: 31,
      department: "Design",
      position: "Graphiste",
      salary: 45000,
      skills: ["Illustrator", "InDesign", "Branding"],
      joinDate: "2019-09-22",
      email: "elodie.simon@company.com",
      projects: ["Project Gamma"],
      isActive: true,
      languages: ["French"]
    },
    {
      id: 8,
      firstName: "Nicolas",
      lastName: "Laurent",
      age: 40,
      department: "Management",
      position: "Directeur Technique",
      salary: 75000,
      skills: ["Architecture", "Team Leadership", "Cloud Computing"],
      joinDate: "2016-04-05",
      email: "nicolas.laurent@company.com",
      projects: ["Project Alpha", "Project Beta", "Project Gamma", "Project Delta"],
      isActive: true,
      languages: ["French", "English"]
    },
    {
      id: 9,
      firstName: "Laura",
      lastName: "Michel",
      age: 26,
      department: "Marketing",
      position: "Chargée de communication",
      salary: 42000,
      skills: ["Social Media", "Content Writing", "Community Management"],
      joinDate: "2021-07-30",
      email: "laura.michel@company.com",
      projects: ["Project Epsilon"],
      isActive: true,
      languages: ["French", "English", "German"]
    },
    {
      id: 10,
      firstName: "Alexandre",
      lastName: "Dubois",
      age: 33,
      department: "Développement",
      position: "DevOps Engineer",
      salary: 60000,
      skills: ["AWS", "Terraform", "CI/CD", "Kubernetes"],
      joinDate: "2018-11-12",
      email: "alexandre.dubois@company.com",
      projects: ["Project Beta", "Project Delta"],
      isActive: true,
      languages: ["French", "English"]
    },
    {
      id: 11,
      firstName: "Sarah",
      lastName: "Lefevre",
      age: 29,
      department: "Design",
      position: "UX Researcher",
      salary: 49000,
      skills: ["User Testing", "Data Analysis", "Prototyping"],
      joinDate: "2020-05-19",
      email: "sarah.lefevre@company.com",
      projects: ["Project Alpha", "Project Gamma"],
      isActive: true,
      languages: ["French", "English"]
    },
    {
      id: 12,
      firstName: "Maxime",
      lastName: "Roux",
      age: 38,
      department: "Management",
      position: "Responsable RH",
      salary: 58000,
      skills: ["Recrutement", "Gestion de carrière", "Formation"],
      joinDate: "2017-02-28",
      email: "maxime.roux@company.com",
      projects: [],
      isActive: false,
      languages: ["French", "English", "Spanish"]
    },

    {
      id: 48,
      firstName: "Hugo",
      lastName: "Martinez",
      age: 38,
      department: "Management",
      position: "Directeur de Projet",
      salary: 74000,
      skills: ["Risk Management", "Stakeholder Management", "Agile Coaching"],
      joinDate: "2016-08-22",
      email: "hugo.martinez@company.com",
      projects: ["Project Alpha", "Project Gamma"],
      isActive: true,
      languages: ["French", "English", "Spanish"]
    },
    {
      id: 49,
      firstName: "Léonie",
      lastName: "Dufour",
      age: 27,
      department: "Marketing",
      position: "Community Manager",
      salary: 40000,
      skills: ["Social Media", "Influencer Marketing", "Brand Voice"],
      joinDate: "2021-02-28",
      email: "leonie.dufour@company.com",
      projects: ["Project Epsilon"],
      isActive: true,
      languages: ["French", "English"]
    },
    {
      id: 50,
      firstName: "Sophie",
      lastName: "Leroy",
      age: 31,
      department: "Marketing",
      position: "Responsable marketing digital",
      salary: 52000,
      skills: ["SEO", "Google Analytics", "Content Marketing", "Social Media"],
      joinDate: "2021-01-05",
      email: "sophie.leroy@company.com",
      projects: ["Project Epsilon"],
      isActive: false,
      languages: ["French", "English", "Italian"]
    }
  ];

function getname (employees){
    return employees[0].firstName
}

const names = getname(employees)
console.log(names);

function getlastname(employees){
for (let i= employees.length-1; i>= 0; i--){
    return employees[i].lastName
}
}
const lastName = getlastname(employees)
console.log(lastName)

function depart(employees, id){
    for(let i = 0; i < employees.length;i++){
        if(employees[i].id === id){
            return employees[i].department
        }
    }
}

const sinc = depart(employees, 5)
console.log(sinc);