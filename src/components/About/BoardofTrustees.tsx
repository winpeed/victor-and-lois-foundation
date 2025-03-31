import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import AvatarFrame from "@/assets/images/avatarFrame.png";

type RenderCardProps = {
  image?: string;
  title?: string;
  name?: string;
};

const RenderCard = ({
  image = AvatarFrame,
  title = "Alero R. Eyesan",
  name = "BOARD OF TRUSTEE",
}: RenderCardProps) => {
  return (
    <section>
      <div className="flex justify-center">
        <Avatar className="w-[120px] h-[120px] bg-white p-1">
          <AvatarImage className=" rounded-full" src={AvatarFrame} />
          <AvatarFallback>
            <img
              className="w-full h-full rounded-full"
              src={image}
              alt="AvatarFrame"
            />
          </AvatarFallback>
        </Avatar>
      </div>
      <div className="text-center">
        <h3 className="font-medium text-base">{name}</h3>
        <h3 className="font-extrabold text-sm">{title}</h3>
      </div>
    </section>
  );
};

const data = [
  { image: AvatarFrame, title: "BOARD OF TRUSTEES", name: "Alero R. Eyesan" },
  { image: AvatarFrame, title: "PRESIDENT", name: "Victor O. Abraham" },
  { image: "", title: "BOARD OF TRUSTEES", name: "Rev. Friday B. Obende" },
  { image: "", title: "SECRETARY", name: "Lois Nkem Abraham" },
  { image: "", title: "TREASURER", name: "Praise David Obende" },
  { image: "", title: "MEMBER", name: "Akinyemi T. Komolafe" },
  { image: "", title: "MEMBER", name: "Apostle Harrison N. Osagie" },
  { image: "", title: "MEMBER", name: "Pst. Remilekun Eyesan" },
  { image: "", title: "MEMBER", name: "Olasunmbo Abraham" },
  { image: "i", title: "MEMBER", name: "Samuel C. ABRAHAM" },
  { image: "", title: "MEMBER", name: "Olubunmi Matthew" },
];

const BoardofTrustees = () => {
  return (
    <div className="w-[90%] mx-auto py-10">
      <h3
        style={{
          fontFamily: "Inknut Antiqua, serif",
        }}
        className="sm:text-4xl text-xl text-[#1D2671] font-bold mb-5"
      >
        BOARD OF TRUSTEES AND MEMBERS
      </h3>
      <section>
        <div className="w-full sm:block hidden mx-auto space-y-7">
          <div className="grid sm:grid-cols-3 grid-cols-2 w-full place-content-center mx-auto ">
            {data.slice(0, 3).map((item, index) => (
              <div key={index}>
                <RenderCard
                  image={item.image}
                  title={item.title}
                  name={item.name}
                />
              </div>
            ))}
          </div>
          <div className="mx-auto sm:w-1/2 grid grid-cols-2">
            {data.slice(3, 5).map((item, index) => (
              <div key={index}>
                <RenderCard
                  image={item.image}
                  title={item.title}
                  name={item.name}
                />
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-6 grid-cols-2 gap-4 w-full place-items-center">
            {data.slice(5).map((item, index) => (
              <div key={index} className="col-span-1">
                <RenderCard
                  image={item.image}
                  title={item.title}
                  name={item.name}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="w-full sm:hidden block">
          <div className="grid grid-cols-2 w-full place-content-center mx-auto ">
            {data.map((item, index) => (
              <div key={index} className="mb-5">
                <RenderCard
                  image={item.image}
                  title={item.title}
                  name={item.name}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BoardofTrustees;
