import React from "react"
import { LiskAvatar } from "../liskAvatar/liskAvatar";

interface AvatarProps {
  seed?: string
  address: string
  className?: string
  size?: number
  username?: boolean
  circle?: boolean
  collectible?: boolean
  standard?: boolean
}

export const Avatar = ({
        seed,
        standard,
        address,
        className,
        size,
        username,
        collectible,
        circle,
      }: AvatarProps) => {
  /*const { getAvatar, avatars } = useAvatars()
  const [currentAvatar, setCurrentAvatar] = useState<NftsDataType>()

  useEffect(() => {
    const avatar = getAvatar(address || "")
    setCurrentAvatar(avatar?.avatar)
  }, [address, avatars])*/

  return (
    <>
      <LiskAvatar
        size={size || 0}
        collectible={collectible}
        address={address}
        className={className}
      />
      {/*{!currentAvatar || standard ? (
        <LiskAvatar
          size={size || 0}
          collectible={collectible}
          address={address || ""}
          username={username}
          className={className}
        />
      ) : currentAvatar?.collectionId === "lunar888" || currentAvatar?.collectionId === "amplifire2021" || currentAvatar?.collectionId === "reindeer" ? (
        <AmplifireIcon
          size={size || 0}
          seed={currentAvatar?.id}
          className={className}
          collection={currentAvatar?.collectionId}
        />
      ) : (
        <Pumpkin
          className={className}
          username={username}
          size={size || 0}
          {...currentAvatar}
          id={currentAvatar.id}
          seed={currentAvatar.id}
        />
      )}*/}
    </>
  )
}
