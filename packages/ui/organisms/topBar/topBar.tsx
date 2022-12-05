export interface MenuProps{
  backgroundColor?: string
  className?: string
  color?: string
  children?: any
}

export const TopBar = ({
  backgroundColor,
  className,
  color,
  children,
  ...props
}: MenuProps) => (
  <>
    {/*<CopyHotKey*/}
    {/*  message={`Switch theme to: ${themes[nextThemeIndex].handle}`}*/}
    {/*  hotkey={"t"}*/}
    {/*  action={changeTheme}*/}
    {/*/>*/}
    <nav
      className={[
        "bg-topbar text-onTopbar ",
        "z-40 w-full md:mb-4 items-center",
        className,
      ].join(" ")}
      style={{backgroundColor, color}}
      {...props}
    >
      {children}
    </nav>
  </>
)