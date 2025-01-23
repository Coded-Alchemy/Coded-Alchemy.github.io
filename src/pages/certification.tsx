import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export function CertificationPage() {
    const images = [
        "/img/google_cs.png",
        "/img/thm_pre_sec.png",
        "/img/thm_aoc.png",
        "img/critical_thinking_problem_solving.png",
        "/img/strategic_thinking.png",
        "/img/how-to-be-more-strategic.png",
        "/img/emotional_intelligence.png",
        "/img/active_listening.png",
        "/img/big_goals.png"
    ];

    return (
        <div className="max-w-[800px] w-full space-y-6 px-4">
            <div className="rounded-3xl border border-gray-200 p-6 dark:border-gray-700 space-y-4">
                <div className="box">
                    <h1 className="text-3xl">Certification</h1>
                    <Carousel useKeyboardArrows={true} className="mt-8">
                        {images.map((URL, index) => (
                            <div className="slide">
                                <img alt="Certification" src={URL} key={index}/>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
        </div>
    );
}