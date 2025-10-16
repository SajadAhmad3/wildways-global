export interface TeamMember {
  name: string;
  designation: string;
  imageUrl: string;
  twitterUrl: string;
  instagramUrl: string;
  facebookUrl: string;
}

export const teamData: TeamMember[] = [
  {
    name: "Fayaz Kashmiri",
    designation: "Founder & CEO",
    imageUrl: "/images/team/skier.jpg",
    twitterUrl: "https://twitter.com/johndoe",
    instagramUrl: "https://instagram.com/johndoe",
    facebookUrl: "https://facebook.com/johndoe",
  },
  {
    name: "Haseeb Hajam",
    designation: "Lead Ski Instructor",
    imageUrl: "/images/team/haseeb_3.jpg",
    twitterUrl: "https://twitter.com/janesmith",
    instagramUrl: "https://instagram.com/janesmith",
    facebookUrl: "https://facebook.com/janesmith",
  },
  {
    name: "Mudasir Reshi",
    designation: "Lead Tour Guide",
    imageUrl: "/images/team/mudasir.jpeg",
    twitterUrl: "https://twitter.com/michaeljohnson",
    instagramUrl: "https://instagram.com/michaeljohnson",
    facebookUrl: "https://facebook.com/michaeljohnson",
  },
  {
    name: "Rayees Lone",
    designation: "Operations Manager",
    imageUrl: "/images/team/rayees.jpeg",
    twitterUrl: "https://twitter.com/emilydavis",
    instagramUrl: "https://instagram.com/emilydavis",
    facebookUrl: "https://facebook.com/emilydavis",
  },
];
