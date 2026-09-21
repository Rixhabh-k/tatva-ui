import { useState } from "react";
import { Download, MousePointer2, ChevronUp,Type } from "lucide-react";

import "./docsSidebar.css";
import { useNavigate, useLocation } from "react-router";

const navigation = [
  {
    title: "Installation",
    icon: Download,
    items: [
      {
        label: "Installation",
        slug: "installation",
      },
    ],
  },

  {
    title: "Buttons",
    icon: MousePointer2,
    items: [
      {
        label: "Magnetic Button",
        slug: "magnetic-button",
      },
      {
        label: "Flip Button",
        slug: "flip-button",
      },
      {
        label: "Fill Button",
        slug: "fill-button",
      },
      {
        label: "3D Button",
        slug: "3d-button",
      },
      {
        label: "Submit Button",
        slug: "submit-button",
      },
      {
        label: "Position Aware Button",
        slug: "position-aware-button",
      },
      {
        label: "Upload Button",
        slug: "upload-button",
      },
    ],
  },

  {
    title: "Text",
    icon: Type,
    items: [
      {
        label: "TypeWriter Text",
        slug: "typewriter-text",
      },
      {
        label: "Text Scramble",
        slug: "text-scramble",
      },
      {
        label: "Shadow Text",
        slug: "shadow-text",
      },
      {
        label: "Wave Text",
        slug: "wave-text",
      },
      {
        label: "Magic Text",
        slug: "magic-text",
      },
    ],
  },
];

export default function DocsSidebar() {
  const [openSections, setOpenSections] = useState({
    Installation: true,
    Buttons: true,
  });

  const navigate = useNavigate();
  const location = useLocation();

  const toggleSection = (sectionTitle) => {
    setOpenSections((previousSections) => ({
      ...previousSections,
      [sectionTitle]: !previousSections[sectionTitle],
    }));
  };

  return (
    <aside className="docs-sidebar">
      <nav className="sidebar-navigation">
        {navigation.map((section) => {
          const Icon = section.icon;
          const isOpen = openSections[section.title];

          return (
            <div className="sidebar-group" key={section.title}>
              <button
                type="button"
                className="sidebar-section-header"
                onClick={() => toggleSection(section.title)}
                aria-expanded={isOpen}
              >
                <span className="header-left">
                  <Icon size={19} strokeWidth={1.8} />
                  <span>{section.title}</span>
                </span>

                <ChevronUp
                  size={16}
                  strokeWidth={1.8}
                  className={`chevron ${isOpen ? "open" : ""}`}
                />
              </button>

              {isOpen && (
                <div className="sidebar-items">
                  {section.items.map((item) => (
                    <button
                      key={item.slug}
                      className={`sidebar-item ${
                        location.pathname === `/docs/${item.slug}`
                          ? "active"
                          : ""
                      }`}
                      onClick={() => navigate(`/docs/${item.slug}`)}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
