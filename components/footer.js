import Container from "@/components/container";
import ThemeSwitch from "@/components/themeSwitch";

export default function Footer(props) {
  return (
    <Container className="mt-10 border-t border-gray-100 dark:border-gray-800">
      <div className="py-5 text-center text-sm">
        Copyright © {new Date().getFullYear()} {props?.copyright}. All rights reserved.
      </div>
      <div className="flex justify-center pb-5 md:justify-end">
        <ThemeSwitch />
      </div>
    </Container>
  );
}
