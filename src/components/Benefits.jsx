import { benefits } from "../constants";
import Section from "./Section";
import Heading from "./Heading";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";

const Benefits = () => {
  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md xl:max-w-2xl"
          title="Meet Our Amazing Team"
        />
        <div className="grid gap-10 mb-10 md:grid-cols-3 lg:grid-cols-3">
          {benefits.map((item) => (
            <div
              className={`block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]`}
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col items-center justify-center min-h-[22rem] p-[2.4rem] pointer-events-none">
                <div className="flex mt-auto mb-[4rem]">
                  <img
                    src={item.iconUrl}
                    width={150}
                    height={150}
                    alt={item.title}
                  />
                </div>
                <h5 className="h5 mb-3">{item.title}</h5>
                <p className="body-1 mb-2 text-n-3">{item.text}</p>
              </div>
              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{
                  clipPath: "url(#benefits)",
                }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>
              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
