import { FaBookOpen } from "react-icons/fa";
import { useInView } from "../hooks/useInView";

interface SubjectCardProps {
  name: string;
  delay?: number;
}

function SubjectCard({ name, delay = 0 }: SubjectCardProps) {
  const { ref, isInView } = useInView();

  return (
    <div
      ref={ref}
      className={`
        w-36 h-36 md:w-44 md:h-44 rounded-2xl bg-purple-500/10 border-2 border-purple-500/10 flex flex-col items-center justify-center
        relative overflow-visible select-none
        shadow-md
        transition-all duration-300
        ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
      `}
      style={{ transitionDelay: isInView ? `${delay * 120}ms` : '0ms' }}
    >
      <div className="flex items-center justify-center mb-2">
        <span className="bg-gradient-to-br from-purple-500/10 to-purple-500/30 rounded-full p-4 shadow-sm">
          <FaBookOpen className="text-4xl md:text-5xl text-[#bcbcff] drop-shadow-[0_2px_8px_rgba(124,95,255,0.15)]" />
        </span>
      </div>

      {/* Titre en dessous */}
      <div className="w-full flex flex-col items-center">
        <span className="text-[#f4f6fa] font-semibold text-base md:text-lg text-center mt-1">
          {name}
        </span>
      </div>
    </div>
  );
}

export default SubjectCard;
