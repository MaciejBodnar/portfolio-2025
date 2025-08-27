import { motion } from "framer-motion";

interface SkillProps {
  image?: string;
  progress?: string;
  title?: string;
}

export const Skill = ({ image, progress, title }: SkillProps) => {
  return (
    <div>
      <div className="group relative flex cursor-pointer">
        <motion.img
          initial={{
            x: 100,
          }}
          transition={{
            duration: 1,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          src={image}
          className=" rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
        />
        <div className="absolute opacity-0 group-hover:opacity-80 group-active:opacity-80 transition duration-300 ease-in-out group-hover:bg-white group-active:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
          <div className="flex items-center justify-center h-full">
            <p className="text-3xl font-bold text-black opacity-100">
              {progress}
            </p>
          </div>
        </div>
      </div>
      <p className="text-xs tracking-[3px] text-gray-500 pt-1">{title}</p>
    </div>
  );
};
