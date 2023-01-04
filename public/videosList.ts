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
    thumb: 'https://i.ytimg.com/vi/oe70Uhjc_F4/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBJpW_1Mg-m2r0FbHjV41stKGIFdw',
    title: 'FROM EARTH TO SPACE | Free HD VIDEO - NO COPYRIGHT',
    category: 'video'
  },
  {
    id: 5,
    url: '/assets/videos/5.mp4',
    thumb: 'https://i.ytimg.com/vi/4iC4f4S99S0/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDRG183HCJ8W7hpETndLRrDPqMfBw',
    title: 'Beauty Of Nature Time Lapse | Free HD Video - No Copyright',
    category: 'video'
  },
]