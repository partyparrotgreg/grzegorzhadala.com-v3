"use client";

export const MainNavigation = () => {
  return (
    <div className="flex flex-row bg-background content-padding justify-between gap-4 fixed top-0 left-0 right-0 items-center z-[100]">
      <div className="flex-grow font-medium tracking-tight">
        Greg Hadala &mdash; Designer & Developer
      </div>
      <nav className="flex flex-row items-center gap-4">
        <a href="/">Home</a>
        <a href="/projects">Projects</a>
        <a href="/about">About</a>
      </nav>
      {/* <ThemeSwitchButton /> */}
    </div>
  );
};
