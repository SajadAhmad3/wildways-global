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
];
