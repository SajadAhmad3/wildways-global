import Container from "@/app/components/Container";
import TeamCard from "@/app/components/team/teamCard";
// import { Heading } from "@/app/elements/Heading";
import { teamData } from "@/app/utils/teamData";
import React from "react";

const Team = () => {
  return (
    <Container className="">
      <div>
        {/* <Heading title="Team" description="Meet Our Team"></Heading> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4 mx-auto">
          {teamData.map((data, index) => (
            <div key={index} className="flex justify-center">
              <TeamCard
                designation={data.designation}
                name={data.name}
                imageUrl={data.imageUrl}
                twitterUrl={data.twitterUrl}
                instagramUrl={data.instagramUrl}
                facebookUrl={data.facebookUrl}
              />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Team;
