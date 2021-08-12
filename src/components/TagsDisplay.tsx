import React from "react";

interface TagsProps {
  tags: string[];
}

interface TagProps {
  title: string;
}

export function Tag({ title }: TagProps) {
  return <span>{title}</span>;
}

export default function TagsDisplay({ tags }: TagsProps) {
  return (
    <div>
      {tags.map((tag: string, index: number) => {
        return <Tag title={tag} key={"tag" + index} />;
      })}
    </div>
  );
}
