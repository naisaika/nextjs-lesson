import React, { useState } from "react";
import { Flipper, Flipped } from "react-flip-toolkit";
import Card from "./Card";
import data from "./data";
import "./styles.css";
import "sanitize.css";

const ListExample = () => {
  const [type, setType] = useState("list");
  const [sort, setSort] = useState("asc");
  const [filteredIds, setFilteredIds] = useState([]);
  const [stagger, setStagger] = useState("forward");
  const [spring, setSpring] = useState("noWobble");

  // 毎回新しく選択されたidが更新される
  const addToFilteredIds = (id) => {
    setFilteredIds((prevFilteredIds) => prevFilteredIds.concat(id));
  };

  return (
    <div className="fm-example">
      <Flipper
        flipKey={`${type}-${sort}-${JSON.stringify(filteredIds)}-${stagger}`}
        spring={spring}
        staggerConfig={{
          default: {
            reverse: stagger !== "forward",
            speed: 1,
          },
        }}
        decisionData={{ type, sort, filteredIds, stagger }}
      >
        <div className="fm-flex-container">
          <fieldset>
            <legend>Sort</legend>
            <label
              onClick={() => setSort("asc")}
            >
              <input
                type="radio"
                name="sort"
                checked={sort === "asc"}
              />
              asc
            </label>
            <label
              onClick={() => setSort("desc")}
            >
              <input
                type="radio"
                name="sort"
                checked={sort === "desc"}
              />
              desc
            </label>
          </fieldset>

          <fieldset>
            <legend>Type</legend>
            <label
              onClick={() => setType("grid")}
            >
              <input
                type="radio"
                name="type"
                checked={type === "grid"}
              />
              grid
            </label>
            <label
              onClick={() => setType("list")}
            >
              <input
                type="radio"
                name="type"
                checked={type === "list"}
              />
              list
            </label>
          </fieldset>

          <fieldset>
            <legend>Stagger</legend>
            <div className="fm-flex-container">
              {["forward", "reverse", "none"].map((staggerType) => (
                <label key={staggerType}>
                  <input
                    type="radio"
                    name="stagger"
                    checked={stagger === staggerType}
                    onChange={() => {
                      setStagger(staggerType);
                      setSort((prevSort) => (prevSort === "asc" ? "desc" : "asc"));
                    }}
                  />
                  {staggerType}
                </label>
              ))}
            </div>
          </fieldset>

          <fieldset>
            <legend>Spring</legend>
            {["stiff", "noWobble", "veryGentle", "gentle", "wobbly"].map((springType) => (
              <label key={springType}>
                <input
                  type="radio"
                  name="spring"
                  checked={spring === springType}
                  onChange={() => {
                    setSpring(springType);
                    setSort((prevSort) => (prevSort === "asc" ? "desc" : "asc"));
                  }}
                />
                {springType}
              </label>
            ))}
          </fieldset>
        </div>

        {filteredIds.length > 0 && (
          <button
            className="fm-show-all"
            onClick={() => setFilteredIds([])}
          >
            show all cards
          </button>
        )}

        <Flipped flipId="list">
          <div className={type === "grid" ? "fm-grid" : "fm-list"}>
            <Flipped inverseFlipId="list">
              <ul className="list-contents">
                {data
                  .filter((d) => !filteredIds.includes(d.id))
                  .sort((a, b) => (sort === "asc" ? a.id - b.id : b.id - a.id))
                  .map(({ title, id }) => (
                    <Card
                      key={id}
                      id={id}
                      title={title}
                      stagger={["forward", "reverse"].includes(stagger)}
                      type={type}
                      addToFilteredIds={addToFilteredIds}
                    />
                  ))}
              </ul>
            </Flipped>
          </div>
        </Flipped>
      </Flipper>
    </div>
  );
};

export default ListExample;


import React from "react";
import { Flipped, spring } from "react-flip-toolkit";

const onElementAppear = (el, index) =>
  spring({
    onUpdate: (val) => {
      el.style.opacity = val;
    },
    delay: index * 50,
  });

const onExit = (type) => (el, index, removeElement) => {
  spring({
    config: { overshootClamping: true },
    onUpdate: (val) => {
      el.style.transform = `scale${type === "grid" ? "X" : "Y"}(${1 - val})`;
    },
    delay: index * 50,
    onComplete: removeElement,
  });

  return () => {
    el.style.opacity = "";
    removeElement();
  };
};

const onGridExit = onExit("grid");
const onListExit = onExit("list");

const Card = React.memo(({ id, title, type, stagger, addToFilteredIds }) => {
  const flipId = `item-${id}`;
  return (
    <Flipped
      flipId={flipId}
      onAppear={onElementAppear}
      onExit={type === "grid" ? onGridExit : onListExit}
      stagger={stagger}
    >
      <li className="fm-item">
        <Flipped inverseFlipId={flipId}>
          <div>
            <Flipped
              flipId={`${flipId}-content`}
              translate
              delayUntil={flipId}
            >
              <div>
                <h3>{title}</h3>
                <p>{title}</p>
              </div>
            </Flipped>

            <Flipped
              flipId={`${flipId}-button`}
              delayUntil={flipId}
            >
              <button
                className="fm-remove"
                onClick={() => addToFilteredIds(id)}
              >
                &times;
              </button>
            </Flipped>
          </div>
        </Flipped>
      </li>
    </Flipped>
  );
});

export default Card;
