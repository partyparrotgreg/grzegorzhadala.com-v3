"use client";

import React from "react";
import { SectionTitle } from "./section-title";
import { cn } from "@/lib/utils";

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export interface TableProps {
  columns: string[];
  rows: string[][];
}

export interface TypographyListProps {
  items: string[];
  type?: "ordered" | "unordered";
}

export function TypographyHero({ children, ...props }: TypographyProps) {

  return (
    <p
      className={cn(
        "text-6xl",
        "mt-4",
        "font-bold",
        "tracking-tight",
        "lg:text-8xl",
        props.className
      )}
    >
      {children}
    </p>
  );
}

export function TypographyH1({ children }: TypographyProps) {
  return (
    <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
      {children}
    </h1>
  );
}

export function TypographyH2({ children }: TypographyProps) {
  return <h2 className="text-3xl font-semibold tracking-tight">{children}</h2>;
}

export function TypographyH3({ children }: TypographyProps) {
  return <h3 className="text-2xl font-regular tracking-tight">{children}</h3>;
}

export function TypographyH4({ children, ...props }: TypographyProps) {
  return (
    <h4 className="text-xl font-semibold tracking-tight" {...props}>
      {children}
    </h4>
  );
}

export function TypographyH5({ children }: TypographyProps) {
  return <h5 className="text-lg font-semibold tracking-tight">{children}</h5>;
}

export function TypographyH6({ children }: TypographyProps) {
  return <h6 className="text-base font-semibold tracking-tight">{children}</h6>;
}

export function TypographyP({ children, ...props }: TypographyProps) {
  return (
    <p className={cn("text-base opacity-75", props.className)}>{children}</p>
  );
}

export function TypographyBlockquote({ children }: TypographyProps) {
  return <blockquote className="italic">{children}</blockquote>;
}

export function TypographyUl({ items, type }: TypographyListProps) {
  const itemsMap = items.map((item, index) => <li key={index}>{item}</li>);

  return type === "unordered" || type === undefined ? (
    <ul>{itemsMap}</ul>
  ) : (
    <ol>{itemsMap}</ol>
  );
}

export function TypographyTable({ columns, rows }: TableProps) {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={index}>
            {row.map((cell, index) => (
              <td key={index}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function TypographyDemo() {
  return (
    <div>
      <SectionTitle>Typography</SectionTitle>
      <div className="p-16">
        <TypographyHero>Typography Hero</TypographyHero>
        <TypographyH1>Typography H1</TypographyH1>
        <TypographyH2>Typography H2</TypographyH2>
        <TypographyH3>Typography H3</TypographyH3>
        <TypographyH4>Typography H4</TypographyH4>
        <TypographyH5>Typography H5</TypographyH5>
        <TypographyH6>Typography H6</TypographyH6>
        <TypographyP>Typography P</TypographyP>
        <TypographyBlockquote>Typography Blockquote</TypographyBlockquote>
        <TypographyUl
          items={["Unordered list item 1", "Unordered list item 2"]}
        />
        <TypographyUl
          items={["Ordered list item 1", "Ordered list item 2"]}
          type="ordered"
        />
        <TypographyTable
          columns={["King's Treasury", "People's happiness"]}
          rows={[
            ["Empty", "Overflowing"],
            ["Modest", "Satisfied"],
            ["Full", "Ecstatic"],
          ]}
        />
      </div>
    </div>
  );
}
