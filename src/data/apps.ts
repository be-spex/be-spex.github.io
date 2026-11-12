/**
 * Everything the site knows about the apps. To add an app: add an entry here,
 * put its icon into public/icons/ and its screenshots into public/shots/.
 * Cards, the app's own page and the install line are built from this.
 */

export interface Shot {
  /** File name in public/shots without extension; with `themed`, `-light` and `-dark` are appended. */
  file: string;
  themed: boolean;
  width: number;
  height: number;
  /** Title in the window frame, e.g. the file shown. */
  title: string;
  alt: string;
  caption?: string;
}

export interface App {
  slug: string;
  name: string;
  /** How to say the name, where it is not obvious. */
  say?: string;
  /** What it is, in two or three words: shown next to the name. */
  kind: string;
  /** One sentence that tells a visitor what to expect. */
  tagline: string;
  /** Two or three sentences for the app's section and page. */
  description: string;
  /** Group the app is presented in (see `groups`), if any. */
  group?: string;
  /** Accent colour, taken from the app icon. */
  accent: string;
  /** File types or surroundings as small labels, e.g. ".md" or "Cinnamon". */
  labels: string[];
  /** The three points for the home page. */
  highlights: string[];
  /** The full list for the app's page. */
  features: { title: string; text: string }[];
  /** First shot: the one that has to make the impression. */
  shots: Shot[];
  /** APT package name. */
  pkg: string;
  repo: string;
  /** Folder of the app inside `repo`, for monorepos. */
  repoPath?: string;
  /** Prefix of the app's release tags, e.g. "xaq-v" (monorepo) or "v". */
  tagPrefix: string;
  appImage: boolean;
  /** A limitation worth knowing before installing. */
  note?: string;
}

export interface Group {
  id: string;
  name: string;
  kind: string;
  tagline: string;
  description: string;
  /** What all apps of the group share. */
  shared: { title: string; text: string }[];
  repo: string;
}

export const groups: Group[] = [
  {
    id: "qiew",
    name: "Qiew",
    kind: "Quick viewers",
    tagline: "One small viewer per file type.",
    description:
      "Double-click a file, read it, close it. Each Qiew viewer opens in an instant, shows one kind of file really well and never changes it.",
    shared: [
      { title: "Read-only by design", text: "A viewer never writes to the file it shows." },
      { title: "Follows the file", text: "When another program saves it, the view updates and keeps your place." },
      { title: "Search that finds", text: "Ctrl+F with match count; hits inside folded parts open up." },
      { title: "Easy on the eyes", text: "Four colour schemes, light and dark; your choice is remembered." },
    ],
    repo: "be-spex/Qiew",
  },
];

const viewerShot = (file: string, title: string, alt: string, caption?: string): Shot => ({
  file, themed: true, width: 1720, height: 1240, title, alt, caption,
});
const splitShot = (file: string, title: string, alt: string, caption?: string): Shot => ({
  file, themed: true, width: 2880, height: 1240, title, alt, caption,
});

export const apps: App[] = [
  {
    slug: "marq",
    name: "Marq",
    kind: "Markdown viewer",
    tagline: "Markdown files, beautifully rendered – just to read.",
    description:
      "Marq turns a Markdown file into a clean, readable page: headings, tables, code, images. Follow links to other documents and step back, like in a browser.",
    group: "qiew",
    accent: "#2f6fe0",
    labels: [".md", ".markdown"],
    highlights: ["Tables, code blocks and images", "Follows links between documents", "Back and forward like a browser"],
    features: [
      { title: "A page, not a source file", text: "Headings, lists, tables, quotes and code blocks in a comfortable reading column; images next to the file are shown." },
      { title: "Links work", text: "Links to other Markdown files open in place, web links go to your browser, anchors jump within the document." },
      { title: "Back and forward", text: "Toolbar, Alt+←/→ or the mouse buttons take you back through the documents you followed." },
      { title: "Copy the source", text: "One click puts the Markdown itself on the clipboard." },
    ],
    shots: [viewerShot("marq", "Trail-Notes.md – Marq", "Marq showing a Markdown document with headings, a numbered list, a quote and a table")],
    pkg: "marq",
    repo: "be-spex/Qiew",
    repoPath: "apps/marq",
    tagPrefix: "marq-v",
    appImage: true,
  },
  {
    slug: "xaq",
    name: "Xaq",
    say: "Zack",
    kind: "XML viewer",
    tagline: "XML you can actually read: indented, coloured, foldable.",
    description:
      "Xaq shows XML the way you wish it had been written: re-indented, syntax-coloured and foldable, whatever the file looked like. Need a different shape? Run an XSLT on it in the mapping view.",
    group: "qiew",
    accent: "#0f9d7a",
    labels: [".xml", ".xsd", ".wsdl", ".xsl"],
    highlights: ["Pretty-prints any XML, however it was saved", "Fold elements to see the structure", "Try an XSLT side by side"],
    features: [
      { title: "Always well laid out", text: "The tree is re-indented; namespaces, attributes, comments and CDATA each have their colour. Text content stays exactly as written." },
      { title: "Fold what you don't need", text: "Collapse single elements or whole subtrees; the folds survive a reload of the file." },
      { title: "XSLT mapping view", text: "XML, an editable stylesheet and the transformed result side by side. Run with Ctrl+Enter, then save or copy the result." },
      { title: "Honest about broken files", text: "If the input is not well-formed, Xaq shows it as written with the parser's message instead of failing." },
      { title: "Any encoding", text: "UTF-8, UTF-16 or whatever the XML declaration says." },
    ],
    shots: [
      viewerShot("xaq", "orders.xml – Xaq", "Xaq showing an XML file as an indented, syntax-coloured tree with fold markers"),
      splitShot("xaq-split", "orders.xml – Xaq", "Xaq's mapping view: the XML on the left, an XSLT stylesheet in the middle, the transformed XML on the right", "The mapping view: XML, your XSLT and the result side by side."),
    ],
    pkg: "xaq",
    repo: "be-spex/Qiew",
    repoPath: "apps/xaq",
    tagPrefix: "xaq-v",
    appImage: true,
  },
  {
    slug: "jayq",
    name: "Jayq",
    say: "Jake",
    kind: "JSON viewer",
    tagline: "JSON at a glance – and jq filters when you want to dig.",
    description:
      "Jayq lays out JSON as a coloured, foldable tree and keeps every value exactly as it was written. To dig deeper, type a jq filter and see the result next to the data – jq is built in.",
    group: "qiew",
    accent: "#7c4ddb",
    labels: [".json", ".jsonl", ".geojson"],
    highlights: ["Pretty-prints JSON and JSON Lines", "Numbers and key order stay as written", "jq filters, built in"],
    features: [
      { title: "A tree you can scan", text: "Keys, strings, numbers and literals each have their colour; objects and arrays fold." },
      { title: "Nothing gets rounded", text: "Large integers, 1.0 versus 1, key order, even duplicate keys: Jayq shows what is in the file, not what a parser made of it." },
      { title: "jq filter view", text: "JSON, your filter and the result side by side. Run with Ctrl+Enter, load a .jq file, save or copy the result. No jq installation needed." },
      { title: "Runaway filters are stopped", text: "A filter runs in its own process and is ended after ten seconds, so the viewer always stays responsive." },
      { title: "Precise error messages", text: "If a file is not valid JSON, you get line, column and what was expected – and the text as written." },
    ],
    shots: [
      viewerShot("jayq", "stations.json – Jayq", "Jayq showing a JSON file as an indented, syntax-coloured tree with fold markers"),
      splitShot("jayq-split", "stations.json – Jayq", "Jayq's filter view: the JSON on the left, a jq filter in the middle, its result on the right", "The filter view: JSON, your jq filter and the result side by side."),
    ],
    pkg: "jayq",
    repo: "be-spex/Qiew",
    repoPath: "apps/jayq",
    tagPrefix: "jayq-v",
    appImage: true,
  },
  {
    slug: "maillet",
    name: "Maillet",
    kind: "Mail in your tray",
    tagline: "Your mail, rethought: a quick look, a clear decision, an empty inbox.",
    description:
      "Maillet is a mail client that lives in the system tray and organises mail around what you do with it. See what's new at a glance, turn a mail into a task and keep track of where it stands. One-time passwords appear the moment they arrive.",
    accent: "#6d5ef5",
    labels: ["IMAP", "System tray"],
    highlights: [
      "New mail at a glance, people before noise",
      "Mails become tasks: open, in progress, done",
      "One-time passwords, ready to copy",
    ],
    features: [
      { title: "One click away", text: "Maillet sits in the tray and opens as a compact window: all your mailboxes, the new mails first." },
      { title: "People before noise", text: "Newsletters and automatic mails are set apart, so the mails written to you stand out." },
      { title: "Mails become tasks", text: "Make a mail a task and move it from open to in progress to done. The state lives in folders on your mail server, so nothing is locked in." },
      { title: "Pin, file, archive", text: "Every mail gets its place with one click or one key. The aim is an empty inbox, not a full one." },
      { title: "One-time passwords", text: "Login codes and magic links are recognised as they arrive and offered for copying – without opening the mail." },
      { title: "Private by default", text: "Maillet talks to your mail servers and nobody else. Passwords are kept in the system keyring." },
    ],
    shots: [
      { file: "maillet-home", themed: true, width: 1400, height: 1400, title: "Maillet", alt: "Maillet's overview: a fresh login code, a pinned mail and the new mails as cards, grouped into people and noise" },
      { file: "maillet-tasks", themed: true, width: 1400, height: 1400, title: "Maillet", alt: "Maillet's task board with mails as cards under Open, In progress and Done", caption: "Tasks: every mail you have to act on, with its state." },
    ],
    pkg: "maillet",
    repo: "be-spex/Maillet",
    tagPrefix: "v",
    appImage: true,
    note: "Maillet does not replace your mail program yet: it reads, sorts and manages, but does not write mails.",
  },
  {
    slug: "pockettray",
    name: "PocketTray",
    kind: "Tray applet for Cinnamon",
    tagline: "A system tray with a pocket for the icons you rarely need.",
    description:
      "Cinnamon's panel fills up with tray icons. PocketTray keeps the ones you use every day in the panel and tucks the rest into a small pocket that opens with a click.",
    accent: "#8fa3c4",
    labels: ["Cinnamon", "Linux Mint"],
    highlights: ["A tidy panel, nothing lost", "One switch per icon", "Works with old and new tray icons"],
    features: [
      { title: "Sorting with a switch", text: "Right-click PocketTray and decide for each icon: panel or pocket." },
      { title: "One applet for both tray systems", text: "Replaces Cinnamon's System Tray and XApp Status Applet; shows legacy X11 icons as well as StatusNotifier and XApp icons." },
      { title: "Open on click or hover", text: "Or with a keyboard shortcut. The icons in the pocket behave exactly as they would in the panel." },
      { title: "A readable pocket", text: "Icons only, with application names, or with their current status text." },
    ],
    shots: [
      { file: "pockettray", themed: false, width: 619, height: 550, title: "", alt: "PocketTray: the pocket open above the panel, and the menu with one switch per tray icon" },
    ],
    pkg: "pockettray",
    repo: "be-spex/PocketTray",
    tagPrefix: "v",
    appImage: false,
    note: "PocketTray is an applet for the Cinnamon desktop (Linux Mint).",
  },
];

export const appsOf = (group: string) => apps.filter((a) => a.group === group);
export const standalone = apps.filter((a) => !a.group);
export const sourceUrl = (a: App) => `https://github.com/${a.repo}${a.repoPath ? `/tree/main/${a.repoPath}` : ""}`;
