import classNames from "classnames";
import { detectedLanguage } from "../utils";
import styles from "./song-card.css";
import { useState, useContext } from "preact/hooks";
import { Zap, Lock, Edit, Slash } from "preact-feather";
import { TranslateContext } from "@denysvuika/preact-translate";
import { IconMenu } from "./icon-menu";
import { CardLabel } from "./card-label";
import { DrawnChart } from "../models/Drawing";
import { AbbrDifficulty } from "../game-data-utils";
import { useDifficultyColor } from "../hooks/useDifficultyColor";

const isJapanese = detectedLanguage === "ja";

type Player = 1 | 2;

interface IconCallbacks {
  onVeto: (p: Player) => void;
  onProtect: (p: Player) => void;
  onReplace: (p: Player, chart: DrawnChart) => void;
  onReset: () => void;
}

interface Props {
  chart: DrawnChart;
  vetoedBy?: Player;
  protectedBy?: Player;
  replacedBy?: Player;
  replacedWith?: DrawnChart;
  iconCallbacks?: IconCallbacks;
}

export function SongCard(props: Props) {
  const {
    chart,
    vetoedBy,
    protectedBy,
    replacedBy,
    replacedWith,
    iconCallbacks,
  } = props;

  const { t } = useContext(TranslateContext);
  const [showingIconMenu, setShowIconMenu] = useState(false);
  const showIcons = () => setShowIconMenu(true);
  const hideIcons = () => {
    setShowIconMenu(false);
    return true;
  };

  const {
    name,
    nameTranslation,
    artist,
    artistTranslation,
    bpm,
    difficultyClass,
    level,
    hasShock,
    jacket,
  } = replacedWith || chart;
  const diffAccentColor = useDifficultyColor(difficultyClass);

  const rootClassname = classNames(styles.chart, {
    [styles.vetoed]: vetoedBy,
    [styles.protected]: protectedBy || replacedBy,
    [styles.clickable]: !!iconCallbacks,
  });

  let jacketBg = {};
  if (jacket) {
    jacketBg = {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url("jackets/${jacket}")`,
    };
  }

  return (
    <div
      className={rootClassname}
      onClick={showingIconMenu && iconCallbacks ? undefined : showIcons}
    >
      {vetoedBy && (
        <CardLabel left={vetoedBy === 1}>
          P{vetoedBy}
          <Slash size={16} />
        </CardLabel>
      )}
      {protectedBy && (
        <CardLabel left={protectedBy === 1}>
          P{protectedBy}
          <Lock size={16} />
        </CardLabel>
      )}
      {replacedBy && (
        <CardLabel left={replacedBy === 1}>
          P{replacedBy}
          <Edit size={16} />
        </CardLabel>
      )}
      {showingIconMenu && !!iconCallbacks && (
        <IconMenu
          onProtect={(p: Player) => hideIcons() && iconCallbacks.onProtect(p)}
          onPocketPicked={(p: Player, c: DrawnChart) =>
            hideIcons() && iconCallbacks.onReplace(p, c)
          }
          onVeto={(p: Player) => hideIcons() && iconCallbacks.onVeto(p)}
          onlyReset={!!(vetoedBy || protectedBy || replacedBy)}
          onReset={() => hideIcons() && iconCallbacks.onReset()}
          onClose={hideIcons}
        />
      )}
      <div className={styles.cardCenter} style={jacketBg}>
        <div className={styles.name} title={nameTranslation}>
          {name}
        </div>
        {isJapanese ? null : (
          <div className={styles.nameTranslation}>{nameTranslation}</div>
        )}
        <div className={styles.artist} title={artistTranslation}>
          {artist}
        </div>
      </div>
      <div
        className={styles.cardFooter}
        style={{ backgroundColor: diffAccentColor }}
      >
        <div className={styles.bpm}>{bpm} BPM</div>
        {hasShock && (
          <div className={styles.shockBadge} title={t("shockArrows")}>
            <Zap
              size={12}
              aria-hidden
              color="black"
              fill="yellow"
              stroke-width="1"
            />
          </div>
        )}
        <div className={styles.difficulty}>
          <AbbrDifficulty diffClass={difficultyClass} /> {level}
        </div>
      </div>
    </div>
  );
}
