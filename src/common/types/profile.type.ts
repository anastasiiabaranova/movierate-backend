export type Profile = {
  id: number;
  name: string;
  email: string;
  avatar_path: string;

  isCurrentUser: boolean;
  isFollowed?: boolean;
}