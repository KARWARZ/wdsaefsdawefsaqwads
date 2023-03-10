import { JSX } from "solid-js";
import { version } from "~/../package.json";
import banner from "~/assets/banner.svg";
import IconButton from "~/components/IconButton";
import FooterLink from "./Link";

export default function Navbar(): JSX.Element {
  return (
    <footer class="my-10 px-8 sm:px-16 md:px-20 lg:px-32 flex gap-10 flex-col md:flex-row justify-center items-center md:justify-between">
      <div class="flex flex-col gap-5">
        <img src={banner} alt="Radon Games" class="h-6 w-min" />
        <p class="w-96 text-sm">
          An open-source unblocked games website built with simplicity in mind.
        </p>
        <div class="flex gap-5">
          <IconButton
            href="https://discord.gg/C2fbK35Rhg"
            text="Discord"
            type="fa-brands"
            icon="fa-discord"
          />
          <IconButton
            href="https://github.com/Radon-Games/Radon-Games"
            text="Discord"
            type="fa-brands"
            icon="fa-github"
          />
        </div>
        <span class="font-semibold">
          <i class="fa-regular fa-code-branch"></i> v{version}
        </span>
      </div>
      <div class="flex gap-12">
        <div class="flex flex-col gap-2">
          <FooterLink text="Home" href="/" />
          <FooterLink text="Games" href="/games" />
          <FooterLink text="Apps" href="/apps" />
        </div>
        <div class="flex flex-col gap-2">
          <FooterLink text="Partners" href="/partners" />
          <FooterLink text="Settings" href="/settings" />
          <FooterLink text="Privacy" href="/privacy" />
        </div>
        <div class="flex flex-col gap-2">
          <FooterLink
            text="Request"
            href="https://github.com/Radon-Games/Radon-Games/issues/new?assignees=&labels=game%20request&template=game_request.md"
          />
          <FooterLink
            text="Report"
            href="https://github.com/Radon-Games/Radon-Games/issues/new?assignees=&labels=bug&template=bug_report.md"
          />
          <FooterLink
            text="Patreon"
            href="https://www.patreon.com/Radon_Games"
          />
        </div>
      </div>
    </footer>
  );
}
