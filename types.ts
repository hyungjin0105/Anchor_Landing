export interface FeatureProps {
  label: string;
  title: string;
  description: string[];
  points: string[];
  imageSide: 'left' | 'right';
  visualType: 'network' | 'anchor' | 'collaboration';
}
