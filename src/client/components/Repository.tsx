import React from "react";
import Moment from "react-moment";

export const Repository: React.FC<any> = ({ ...props }) => {
  const {
    name,
    fork,
    license,
    updated_at,
    description,
    language,
    visibility,
    forks_count,
    stargazers_count,
    archived,
  } = props.data;

  const languageColorCode: any = {
    ABAP: "#E8274B",
    ActionScript: "#882B0F",
    Ada: "#02f88c",
    Agda: "#315665",
    "AGS Script": "#B9D9FF",
    Alloy: "#64C800",
    AMPL: "#E6EFBB",
    ANTLR: "#9DC3FF",
    "API Blueprint": "#2ACCA8",
    APL: "#5A8164",
    Arc: "#aa2afe",
    Arduino: "#bd79d1",
    ASP: "#6a40fd",
    AspectJ: "#a957b0",
    Assembly: "#6E4C13",
    ATS: "#1ac620",
    AutoHotkey: "#6594b9",
    AutoIt: "#1C3552",
    BlitzMax: "#cd6400",
    Boo: "#d4bec1",
    Brainfuck: "#2F2530",
    "C Sharp": "#178600",
    C: "#555555",
    Chapel: "#8dc63f",
    Cirru: "#ccccff",
    Clarion: "#db901e",
    Clean: "#3F85AF",
    Click: "#E4E6F3",
    Clojure: "#db5855",
    CoffeeScript: "#244776",
    "ColdFusion CFC": "#ed2cd6",
    ColdFusion: "#ed2cd6",
    "Common Lisp": "#3fb68b",
    "Component Pascal": "#b0ce4e",
    cpp: "#f34b7d",
    Crystal: "#776791",
    CSS: "#563d7c",
    D: "#ba595e",
    Dart: "#00B4AB",
    Diff: "#88dddd",
    DM: "#447265",
    Dogescript: "#cca760",
    Dylan: "#6c616e",
    E: "#ccce35",
    Eagle: "#814C05",
    eC: "#913960",
    ECL: "#8a1267",
    edn: "#db5855",
    Eiffel: "#946d57",
    Elixir: "#6e4a7e",
    Elm: "#60B5CC",
    "Emacs Lisp": "#c065db",
    EmberScript: "#FFF4F3",
    Erlang: "#B83998",
    "F#": "#b845fc",
    Factor: "#636746",
    Fancy: "#7b9db4",
    Fantom: "#dbded5",
    FLUX: "#88ccff",
    Forth: "#341708",
    FORTRAN: "#4d41b1",
    FreeMarker: "#0050b2",
    Frege: "#00cafe",
    "Game Maker Language": "#8fb200",
    Glyph: "#e4cc98",
    Gnuplot: "#f0a9f0",
    Go: "#375eab",
    Golo: "#88562A",
    Gosu: "#82937f",
    "Grammatical Framework": "#79aa7a",
    Groovy: "#e69f56",
    Handlebars: "#01a9d6",
    Harbour: "#0e60e3",
    Haskell: "#29b544",
    Haxe: "#df7900",
    HTML: "#e44b23",
    Hy: "#7790B2",
    IDL: "#a3522f",
    Io: "#a9188d",
    Ioke: "#078193",
    Isabelle: "#FEFE00",
    J: "#9EEDFF",
    Java: "#b07219",
    JavaScript: "#f1e05a",
    JFlex: "#DBCA00",
    JSONiq: "#40d47e",
    Julia: "#a270ba",
    "Jupyter Notebook": "#DA5B0B",
    Kotlin: "#F18E33",
    KRL: "#28431f",
    Lasso: "#999999",
    Latte: "#A8FF97",
    Lex: "#DBCA00",
    LFE: "#004200",
    LiveScript: "#499886",
    LOLCODE: "#cc9900",
    LookML: "#652B81",
    LSL: "#3d9970",
    Lua: "#000080",
    Makefile: "#427819",
    Mask: "#f97732",
    Matlab: "#bb92ac",
    Max: "#c4a79c",
    MAXScript: "#00a6a6",
    Mercury: "#ff2b2b",
    Metal: "#8f14e9",
    Mirah: "#c7a938",
    MTML: "#b7e1f4",
    NCL: "#28431f",
    Nemerle: "#3d3c6e",
    nesC: "#94B0C7",
    NetLinx: "#0aa0ff",
    "NetLinx+ERB": "#747faa",
    NetLogo: "#ff6375",
    NewLisp: "#87AED7",
    Nimrod: "#37775b",
    Nit: "#009917",
    Nix: "#7e7eff",
    Nu: "#c9df40",
    "Objective-C": "#438eff",
    "Objective-C++": "#6866fb",
    "Objective-J": "#ff0c5a",
    OCaml: "#3be133",
    Omgrofl: "#cabbff",
    ooc: "#b0b77e",
    Opal: "#f7ede0",
    Oxygene: "#cdd0e3",
    Oz: "#fab738",
    Pan: "#cc0000",
    Papyrus: "#6600cc",
    Parrot: "#f3ca0a",
    Pascal: "#b0ce4e",
    PAWN: "#dbb284",
    Perl: "#0298c3",
    Perl6: "#0000fb",
    PHP: "#4F5D95",
    PigLatin: "#fcd7de",
    Pike: "#005390",
    PLSQL: "#dad8d8",
    PogoScript: "#d80074",
    Processing: "#0096D8",
    Prolog: "#74283c",
    "Propeller Spin": "#7fa2a7",
    Puppet: "#302B6D",
    "Pure Data": "#91de79",
    PureBasic: "#5a6986",
    PureScript: "#1D222D",
    Python: "#3572A5",
    QML: "#44a51c",
    R: "#198ce7",
    Racket: "#22228f",
    "Ragel in Ruby Host": "#9d5200",
    RAML: "#77d9fb",
    Rebol: "#358a5b",
    Red: "#ee0000",
    "Ren'Py": "#ff7f7f",
    Rouge: "#cc0088",
    Ruby: "#701516",
    Rust: "#dea584",
    SaltStack: "#646464",
    SAS: "#B34936",
    Scala: "#DC322F",
    Scheme: "#1e4aec",
    Self: "#0579aa",
    Shell: "#89e051",
    Shen: "#120F14",
    Slash: "#007eff",
    Slim: "#ff8f77",
    Smalltalk: "#596706",
    SourcePawn: "#5c7611",
    SQF: "#3F3F3F",
    Squirrel: "#800000",
    Stan: "#b2011d",
    "Standard ML": "#dc566d",
    SuperCollider: "#46390b",
    Swift: "#ffac45",
    SystemVerilog: "#DAE1C2",
    Tcl: "#e4cc98",
    TeX: "#3D6117",
    Turing: "#45f715",
    TypeScript: "#2b7489",
    "Unified Parallel C": "#4e3617",
    "Unity3D Asset": "#ab69a1",
    UnrealScript: "#a54c4d",
    Vala: "#fbe5cd",
    Verilog: "#b2b7f8",
    VHDL: "#adb2cb",
    VimL: "#199f4b",
    "Visual Basic": "#945db7",
    Volt: "#1F1F1F",
    Vue: "#2c3e50",
    "Web Ontology Language": "#9cc9dd",
    wisp: "#7582D1",
    X10: "#4B6BEF",
    xBase: "#403a40",
    XC: "#99DA07",
    XQuery: "#5232e7",
    Zephir: "#118f9e",
  };
  const getColorCode = (value: string) => {
    return languageColorCode["value"];
  };

  return (
    <li className="col-12 d-flex width-full py-4 border-bottom color-border-muted public fork">
      <div className="col-10 col-lg-9 d-inline-block">
        <div className="d-inline-block mb-1">
          <h3 className="wb-break-all f3">
            <a href="#">{name}</a>
            <span />
            <span className="label label--secondary v-align-middle ml-2 mb-1">
              {visibility}
              {!!archived && <span className="ml-1">archive</span>}
            </span>
          </h3>
          {!!fork && (
            <span className="f6 color-fg-muted mb-1">
              Forked from{" "}
              <a className="link--muted" href="#">
                abc/xyz
              </a>
            </span>
          )}
        </div>
        {!!description && (
          <div>
            <p className="col-9 d-inline-block color-fg-muted mb-2 mt-0 pr-4">
              {description}
            </p>
          </div>
        )}
        <div className="f6 color-fg-muted mt-2">
          {!!language && (
            <span className="ml-0 mr-3">
              <span
                className="repository--language-color"
                style={{ backgroundColor: languageColorCode[language] }}
              />
              <span>{language}</span>
            </span>
          )}
          {!!stargazers_count && (
            <a className="link--muted mr-3" href={"#"}>
              <svg
                aria-label="star"
                role="img"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                className="octicon octicon-star">
                <path
                  fillRule="evenodd"
                  d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
              </svg>
              {stargazers_count}
            </a>
          )}
          {!!forks_count && (
            <a className="link--muted mr-3" href="#">
              <svg
                role="img"
                height={16}
                viewBox="0 0 16 16"
                version="1.1"
                width={16}
                className="octicon octicon-repo-forked">
                <path
                  fillRule="evenodd"
                  d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>
              </svg>
              {forks_count}
            </a>
          )}
          {!!license && (
            <span className="mr-3">
              <svg
                aria-hidden="true"
                height={16}
                viewBox="0 0 16 16"
                version="1.1"
                width={16}
                className="octicon octicon-law mr-1">
                <path
                  fillRule="evenodd"
                  d="M8.75.75a.75.75 0 00-1.5 0V2h-.984c-.305 0-.604.08-.869.23l-1.288.737A.25.25 0 013.984 3H1.75a.75.75 0 000 1.5h.428L.066 9.192a.75.75 0 00.154.838l.53-.53-.53.53v.001l.002.002.002.002.006.006.016.015.045.04a3.514 3.514 0 00.686.45A4.492 4.492 0 003 11c.88 0 1.556-.22 2.023-.454a3.515 3.515 0 00.686-.45l.045-.04.016-.015.006-.006.002-.002.001-.002L5.25 9.5l.53.53a.75.75 0 00.154-.838L3.822 4.5h.162c.305 0 .604-.08.869-.23l1.289-.737a.25.25 0 01.124-.033h.984V13h-2.5a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-2.5V3.5h.984a.25.25 0 01.124.033l1.29.736c.264.152.563.231.868.231h.162l-2.112 4.692a.75.75 0 00.154.838l.53-.53-.53.53v.001l.002.002.002.002.006.006.016.015.045.04a3.517 3.517 0 00.686.45A4.492 4.492 0 0013 11c.88 0 1.556-.22 2.023-.454a3.512 3.512 0 00.686-.45l.045-.04.01-.01.006-.005.006-.006.002-.002.001-.002-.529-.531.53.53a.75.75 0 00.154-.838L13.823 4.5h.427a.75.75 0 000-1.5h-2.234a.25.25 0 01-.124-.033l-1.29-.736A1.75 1.75 0 009.735 2H8.75V.75zM1.695 9.227c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L3 6.327l-1.305 2.9zm10 0c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L13 6.327l-1.305 2.9z"></path>
              </svg>
              {license.name}
            </span>
          )}
          {!!updated_at && (
            <>
              Updated <Moment toNow>{updated_at}</Moment>
            </>
          )}
        </div>
      </div>
      <div className="col-2 col-lg-3 d-flex flex-column flex-justify-around">
        <div className="text-right">
          <div className="d-flex button-group float-right">
            <form className="button-group__parent">
              <button
                value="Star"
                aria-label="Star this repository"
                type="submit"
                className="rounded-left-2 button--sm button button-group__item">
                <svg
                  aria-hidden="true"
                  height={16}
                  viewBox="0 0 16 16"
                  version="1.1"
                  width={16}
                  className="octicon octicon-star mr-1">
                  <path
                    fillRule="evenodd"
                    d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
                </svg>
                Star
              </button>
            </form>
            <a className="button--sm button button-group__item px-2 float-none">
              <svg
                aria-hidden="true"
                height={16}
                viewBox="0 0 16 16"
                version="1.1"
                width={16}
                className="octicon octicon-triangle-down">
                <path d="M4.427 7.427l3.396 3.396a.25.25 0 00.354 0l3.396-3.396A.25.25 0 0011.396 7H4.604a.25.25 0 00-.177.427z"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className=""></div>
      </div>
    </li>
  );
};

export default Repository;
