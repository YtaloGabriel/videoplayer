export interface IVideoInfo {
  id: number;
  url?: string;
  thumb?: string;
  title?: string;
  category?: string;
}

export const videosList: IVideoInfo[] = [
  {
    id: 1,
    url: '/assets/videos/1.mp4',
    thumb: 'https://i.ytimg.com/vi/K4DyBUG242c/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLD09Ca5e7NT7dNaxeLF2LrOzwXaUg',
    title: 'Cartoon - On & On (feat. Daniel Levi) [NCS Release]',
    category: 'music'
  },
  {
    id: 2,
    url: '/assets/videos/2.mp4',
    thumb: 'https://i.ytimg.com/vi/8AFv7xCNJmE/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCWHfRDGRZA78wmGL_8inw-E-XFzA',
    title: 'Rob Gasser & Miss Lina - Rift [NCS Release]',
    category: 'music'
  },
  {
    id: 3,
    url: '/assets/videos/3.mp4',
    thumb: 'https://i.ytimg.com/vi/3nQNiWdeH2Q/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAJPrsDWcK162o7Xu7l1iCELfUIYw',
    title: 'Janji - Heroes Tonight (feat. Johnning) [NCS Release]',
    category: 'music'
  },
  {
    id: 4,
    url: '/assets/videos/4.mp4',
    thumb: 'https://i.ytimg.com/vi/3nQNiWdeH2Q/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAJPrsDWcK162o7Xu7l1iCELfUIYw',
    title: 'FROM EARTH TO SPACE | Free HD VIDEO - NO COPYRIGHT',
    category: 'video'
  },
  {
    id: 5,
    url: '/assets/videos/5.mp4',
    thumb: 'https://i.ytimg.com/vi/CmCIZ_aUAeQ/hqdefault.jpg?sqp=-oaymwEiCKgBEF5IWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLA_oFHIYHcZbF5AdNOYblOZnqUw-w',
    title: 'Beauty Of Nature Time Lapse | Free HD Video - No Copyright',
    category: 'video'
  },
]