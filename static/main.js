const socials = [
  {
    style: "--item-count: 1",
    link: "https://twitch.com/moniquelive",
    icon: "M11.64 5.93h1.43v4.28h-1.43m3.93-4.28H17v4.28h-1.43M7 2L3.43 5.57v12.86h4.28V22l3.58-3.57h2.85L20.57 12V2m-1.43 9.29l-2.85 2.85h-2.86l-2.5 2.5v-2.5H7.71V3.43h11.43Z",
    label: "Twitch",
  },
  {
    style: "--item-count: 2",
    link: "https://bsky.app/profile/moniquelive.com",
    icon: "m 16.9916,12.279932 c -0.1376,-0.01664 -0.2792,-0.03326 -0.416472,-0.05398 0.141684,0.01664 0.278872,0.03727 0.416472,0.05398 z M 12,9.4634657 C 10.91244,7.3508549 7.9542859,3.4134001 5.2043719,1.4717647 2.56668,-0.3907509 1.56252,-0.06991727 0.89999995,0.23008273 0.13750085,0.57589934 0,1.7467562 0,2.4342361 0,3.1217647 0.37916473,8.0844 0.62500857,8.9133812 1.4374799,11.6508 4.3375306,12.575893 7.0084041,12.275893 c 0.1375958,-0.02064 0.2747862,-0.03725 0.4164656,-0.05851 -0.1372699,0.02116 -0.2747838,0.04191 -0.4164656,0.05851 -3.9125558,0.583368 -7.38756883,2.008243 -2.8292243,7.078999 C 9.1915949,24.546649 11.046,18.242623 12,15.0468 c 0.954,3.195823 2.050085,9.27095 7.733442,4.308092 C 24,15.0468 20.904203,12.855235 16.9916,12.275893 c -0.1376,-0.01664 -0.2792,-0.03328 -0.416472,-0.05393 0.141684,0.01664 0.278872,0.0373 0.416472,0.05401 2.670757,0.295975 5.566883,-0.629251 6.3832,-3.3625174 C 23.620838,8.0844 24,3.125899 24,2.4342361 24,1.7425717 23.862357,0.57176518 23.1,0.23008273 22.441516,-0.06574793 21.4332,-0.3907509 18.80017,1.4717647 16.045708,3.4134001 13.08756,7.3508549 12,9.4634657 Z",
    label: "Bluesky",
  },
  {
    style: "--item-count: 3",
    link: "https://github.com/moniquelive",
    icon: "M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2",
    label: "Github",
  },
  {
    style: "--item-count: 4",
    link: "https://instagram.com/moniquelive.dev",
    icon: "M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3",
    label: "Instagram",
  },
  {
    style: "--item-count: 5",
    link: "https://www.linkedin.com/in/moniquelive",
    icon: "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z",
    label: "LinkedIn",
  },
  {
    style: "--item-count: 6",
    link: "https://youtube.com/moniquelive",
    icon: "m10 15l5.19-3L10 9zm11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73",
    label: "Youtube",
  },
  {
    style: "--item-count: 7",
    link: "https://stackoverflow.com/users/9793/cyber-oliveira",
    icon: "M17.36 20.2v-5.38h1.79V22H3v-7.18h1.8v5.38zM6.77 14.32l.37-1.76l8.79 1.85l-.37 1.76zm1.16-4.21l.76-1.61l8.14 3.78l-.76 1.62zm2.26-3.99l1.15-1.38l6.9 5.76l-1.15 1.37zm4.45-4.25L20 9.08l-1.44 1.07l-5.36-7.21zM6.59 18.41v-1.8h8.98v1.8z",
    label: "Stack<br />Overflow",
  },
];

const ul = document.querySelector(".links__list");
const tmpl = document.querySelector("#item-template");

for (const social of socials) {
  const li = tmpl.content.cloneNode(true).querySelector("li");
  li.setAttribute("style", social.style);
  li.querySelector(".links__link").setAttribute("href", social.link);
  li.querySelector(".links__icon > path").setAttribute("d", social.icon);
  li.querySelector(".links__text").innerHTML = social.label;
  ul.append(li);
}
