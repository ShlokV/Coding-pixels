import Section from "./Section";
import Heading from "./Heading";
import PrashantSinghania from '../assets/Images/prashant Singhania.jpg';
import ShlokVerma from '../assets/Images/InPics_1650122744.jpg';
import PrashantKumar from '../assets/Images/prashant Kumar.jpg';




const teamMembers = [
    {
        id: 1,
        name: "Shlok Verma",
        role: "Lead Developer",
        description: "Looks after the team and ensures successful project delivery by managing workflows and fostering collaboration.",
        image: ShlokVerma,
    },
    {
        id: 2,
        name: "Prashant Singhania",
        role: "Full Stack Developer",
        description: "Handles the end-to-end development of projects, ensuring seamless integration between frontend and backend systems.",
        image: PrashantSinghania,
    },
    {
        id: 3,
        name: "Prashant Kumar",
        role: "UI/UX Designer",
        description: "Designs intuitive and visually appealing interfaces to enhance user experiences and make projects engaging.",
        image: PrashantKumar,
    },
];


const Teams = () => {
    return (
        <Section className="overflow-hidden pt-8" id="Team"> {/* Adjust padding-top here */}
            <div className="container relative z-2">
                {/* Heading */}
                <Heading
                    tag="Meet Our Team"
                    title="Leading the Unit"
                />

                {/* Team Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6"> {/* Reduced mt-10 to mt-6 */}
                    {teamMembers.map((member) => (
                        <div
                            key={member.id}
                            className="p-6 bg-n-7 rounded-3xl overflow-hidden flex flex-col items-center text-center"
                        >
                            <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover"
                                    style={{ objectPosition: "center top" }} // Adjust image positioning
                                />
                            </div>
                            <h5 className="h5 mb-2">{member.name}</h5>
                            <p className="body-2 mb-2 text-n-3">{member.role}</p>
                            <p className="body-3 text-n-4">{member.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};


export default Teams;
