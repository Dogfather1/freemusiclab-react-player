export interface Track {
  id: string;
  title: string;
  genre: string;
  duration: number;
  downloadUrl: string;
  uploader?: string;
}

export interface FreeMusicPlayerProps {
  genre?: string;
  limit?: number;
  autoplay?: boolean;
  onTrackChange?: (track: Track) => void;
}
