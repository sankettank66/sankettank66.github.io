"use client";

import { useId, useRef, useState } from "react";
import { projects, type Project } from "../data/projects";

function ProjectPlate({ project }: { project: Project }) {
  if (project.id === "lexi") {
    return (
      <div className="plate plate--lexi" aria-hidden="true">
        <span className="plate__corner">LEXI / 01</span>
        <span className="plate__grid" />
        <span className="lexi-node">LEXI</span>
        <span className="lexi-provider lexi-provider--1">OPENAI</span>
        <span className="lexi-provider lexi-provider--2">ANTHROPIC</span>
        <span className="lexi-provider lexi-provider--3">GEMINI</span>
        <span className="lexi-provider lexi-provider--4">GROQ</span>
        <span className="lexi-provider lexi-provider--5">OLLAMA</span>
        <span className="plate__caption">5 PROVIDERS / LOCAL KEYS</span>
      </div>
    );
  }

  if (project.id === "localmind") {
    return (
      <div className="plate plate--localmind" aria-hidden="true">
        <span className="plate__corner">LOCALMIND / 02</span>
        <span className="plate__grid" />
        <div className="terminal">
          <div className="terminal__bar">
            <span />
            <span />
            <span />
          </div>
          <div className="terminal__row">
            <span>model-a</span>
            <span>streaming</span>
          </div>
          <div className="terminal__row">
            <span>model-b</span>
            <span>streaming</span>
          </div>
          <div className="terminal__row terminal__row--muted">
            <span>model-c</span>
            <span>queued</span>
          </div>
          <div className="terminal__metrics">
            <span>TTFT</span>
            <span>LOAD</span>
            <span>TOTAL</span>
          </div>
        </div>
        <span className="plate__caption">PARALLEL LOCAL MODELS</span>
      </div>
    );
  }

  if (project.id === "nse-radar") {
    return (
      <div className="plate plate--nse" aria-hidden="true">
        <span className="plate__corner">NSE RADAR / 03</span>
        <span className="plate__grid" />
        <div className="radar-topline">
          <span>OI / LIVE</span>
          <span>60 SEC</span>
        </div>
        <div className="radar-bars">
          {[42, 58, 36, 70, 52, 84, 46, 64, 76, 54, 88, 62].map((height, index) => (
            <span key={index} style={{ height: `${height}%` }} />
          ))}
        </div>
        <div className="radar-labels">
          <span>STRIKES</span>
          <span>200+ ENTRIES</span>
        </div>
        <span className="plate__caption">OPEN INTEREST / STREAMING</span>
      </div>
    );
  }

  return (
    <div className="plate plate--watch" aria-hidden="true">
      <span className="plate__corner">WATCHSHARE / 04</span>
      <span className="plate__grid" />
      <span className="peer peer--a">YOU</span>
      <span className="watch-line" />
      <span className="peer peer--b">PEER</span>
      <span className="watch-play" />
      <span className="plate__caption">P2P SCREEN / AUDIO / VIDEO</span>
    </div>
  );
}

function ProjectDetail({ project }: { project: Project }) {
  return (
    <div className="work-detail">
      <ProjectPlate project={project} />
      <div className="work-detail__body">
        <div className="work-detail__top">
          <span className="eyebrow">{project.context}</span>
          <span className="mono">{project.year}</span>
        </div>
        <h3>{project.title}</h3>
        <p className="work-detail__summary">{project.summary}</p>

        <ul className="work-detail__bullets">
          {project.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>

        <dl className="work-detail__facts">
          <div>
            <dt>Role</dt>
            <dd>{project.role}</dd>
          </div>
          <div>
            <dt>Signal</dt>
            <dd>{project.evidence}</dd>
          </div>
        </dl>

        <div className="tag-list" aria-label="Stack">
          {project.stack.map((item) => (
            <span className="tag" key={item}>
              {item}
            </span>
          ))}
        </div>

        <div className="work-detail__links">
          {project.links.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
              {link.label} <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ProjectLedger() {
  const [active, setActive] = useState(0);
  const tabs = useRef<Array<HTMLButtonElement | null>>([]);
  const id = useId().replaceAll(":", "");

  const focusTab = (index: number) => {
    setActive(index);
    tabs.current[index]?.focus();
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (event.key === "ArrowDown" || event.key === "ArrowRight") {
      event.preventDefault();
      focusTab((index + 1) % projects.length);
    } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
      event.preventDefault();
      focusTab((index - 1 + projects.length) % projects.length);
    } else if (event.key === "Home") {
      event.preventDefault();
      focusTab(0);
    } else if (event.key === "End") {
      event.preventDefault();
      focusTab(projects.length - 1);
    }
  };

  return (
    <div className="work-grid">
      <div
        className="work-list"
        role="tablist"
        aria-label="Selected projects"
        aria-orientation="vertical"
      >
        {projects.map((project, index) => (
          <button
            key={project.id}
            ref={(node) => {
              tabs.current[index] = node;
            }}
            type="button"
            role="tab"
            id={`${id}-tab-${project.id}`}
            aria-selected={active === index}
            aria-controls={`${id}-panel-${project.id}`}
            tabIndex={active === index ? 0 : -1}
            className="work-row"
            onClick={() => setActive(index)}
            onKeyDown={(event) => onKeyDown(event, index)}
          >
            <span className="work-row__index">{project.index}</span>
            <span className="work-row__year">{project.year}</span>
            <span className="work-row__title">{project.title}</span>
            <span className="work-row__category">{project.category}</span>
            <span className="work-row__arrow" aria-hidden="true">
              ↗
            </span>
          </button>
        ))}
      </div>

      <div className="work-panels">
        {projects.map((project, index) => (
          <div
            key={project.id}
            role="tabpanel"
            id={`${id}-panel-${project.id}`}
            aria-labelledby={`${id}-tab-${project.id}`}
            hidden={active !== index}
            tabIndex={0}
          >
            <ProjectDetail project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}
