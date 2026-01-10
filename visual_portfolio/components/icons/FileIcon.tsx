interface FileIconProps {
  width?: number;
  height?: number;
  className?: string;
}

export default function FileIcon({
  width = 16,
  height = 16,
  className = ""
}: FileIconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className={className}
    >
      <title>default_file</title>
      <path d="M20.414,2H5V30H27V8.586ZM7,28V4H19v6h6V28Z" />
    </svg>
  );
}