import "../styles/FeaturedProject.css";
import {Fragment, useState} from "react";
import {asset} from "../utils/asset.js";
import {featuredProject} from "../data/featuredProject.js";

function FeaturedProject() {
    const {name, subtitle, summary, links, screenshots, highlights, architecture, infrastructure, stack} = featuredProject;
    const [active, setActive] = useState(0);

    return (
        <article id="featured-project">
            <p className="featured-label">Featured Project</p>
            <h3 className="featured-title">{name} <span>{subtitle}</span></h3>
            <p className="featured-summary">{summary}</p>

            <div className="featured-links">
                {links.map(({label, href}, index) => (
                    <a
                        key={href}
                        className={`featured-link ${index === 0 ? "primary" : ""}`}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {label}
                    </a>
                ))}
            </div>

            {screenshots.length > 0 && (
                <div className="featured-gallery">
                    <img
                        className="featured-screenshot"
                        src={asset(screenshots[active].src)}
                        alt={screenshots[active].alt}
                    />
                    {screenshots.length > 1 && (
                        <div className="featured-thumbnails">
                            {screenshots.map(({src, alt}, index) => (
                                <button
                                    type="button"
                                    key={src}
                                    className={index === active ? "active" : ""}
                                    aria-label={`Show screenshot ${index + 1}: ${alt}`}
                                    aria-pressed={index === active}
                                    onClick={() => setActive(index)}
                                >
                                    <img src={asset(src)} alt="" loading="lazy"/>
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            )}

            <div className="featured-details">
                <div className="featured-built">
                    <h4>What I built</h4>
                    <ul>
                        {highlights.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </div>

                <div className="featured-architecture">
                    <h4>Architecture</h4>
                    <div className="architecture-flow">
                        {architecture.map(({title, detail}, index) => (
                            <Fragment key={title}>
                                {index > 0 && <span className="architecture-arrow" aria-hidden="true">→</span>}
                                <div className="architecture-node">
                                    <strong>{title}</strong>
                                    <span>{detail}</span>
                                </div>
                            </Fragment>
                        ))}
                    </div>
                    <ul className="architecture-infra">
                        {infrastructure.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>

            <ul className="featured-stack" aria-label="Tech stack">
                {stack.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </article>
    );
}

export default FeaturedProject;
