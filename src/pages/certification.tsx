import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export function CertificationPage() {
    const images = [
        "../../public/img/google_cs.png",
        "../../public/img/thm_aoc.png",
        "../../public/img/critical_thinking_problem_solving.png",
        "../../public/img/strategic_thinking.png",
        "../../public/img/how-to-be-more-strategic.png",
        "../../public/img/emotional_intelligence.png",
        "../../public/img/active_listening.png",
        "../../public/img/big_goals.png"
    ];

    return (
        <div className="max-w-[800px] w-full space-y-6 px-4">
            <div className="rounded-3xl border border-gray-200 p-6 dark:border-gray-700 space-y-4">
                <div className="box">
                    <Carousel useKeyboardArrows={true}>
                        {images.map((URL, index) => (
                            <div className="slide">
                                <img alt="sample_file" src={URL} key={index}/>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
        </div>
    );
}