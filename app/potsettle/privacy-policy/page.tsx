import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PotSettle Privacy Policy",
  description:
    "Privacy policy for PotSettle, an Android app for tracking home poker sessions.",
  robots: {
    index: true,
    follow: false,
  },
};

export default function PotSettlePrivacyPolicy() {
  return (
    <main className="mx-auto max-w-2xl px-4 pb-24 pt-4 text-gray-800 dark:text-gray-100">
      <article className="space-y-8">
        <header className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            PotSettle Privacy Policy
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Last updated: July 26, 2026
          </p>
        </header>

        <p>
          PotSettle (&quot;we,&quot; &quot;the app&quot;) is an Android
          application, developed by Athresh Kiran, that helps hosts track home
          poker sessions on their own device. It is listed on Google Play as
          &quot;PotSettle Poker&quot; for search purposes; the product itself is
          PotSettle. This policy explains what data the app stores, what (if
          anything) leaves your device, and why.
        </p>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">What the app does</h2>
          <p>
            PotSettle is a session ledger for home poker games: buy-ins,
            cash-outs, settlements, running balances, and personal stats across
            sessions you host.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Data stored on your device</h2>
          <p>
            The following is stored locally in the app&apos;s own database and
            never leaves your device as part of normal app use:
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>Player names you enter</li>
            <li>Buy-in, rebuy, and cash-out amounts</li>
            <li>Session settlement and ledger history</li>
            <li>Your currency preference and other app settings</li>
          </ul>
          <p>
            We do not require an account to use PotSettle, and there is no
            PotSettle server that stores any of the above.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Data sent off your device</h2>
          <p>
            PotSettle uses Google Firebase for the following, all processed by
            Google on our behalf:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>Analytics (Firebase Analytics).</strong> Standard
              app-usage events (e.g. app opens, screens viewed) and a small
              number of app-specific events (e.g. when a buy-in is started, when
              a forced update is shown). Disabled during our own internal
              development/testing builds; active in the version you install from
              Google Play.
            </li>
            <li>
              <strong>Crash reporting (Firebase Crashlytics).</strong> If the
              app crashes, technical details (stack trace, device model, OS
              version) are sent so we can fix the problem. This does not include
              your player names, session amounts, or other ledger data.
            </li>
            <li>
              <strong>Remote configuration (Firebase Remote Config).</strong> On
              launch, the app fetches configuration values (e.g. minimum
              supported app version) from Firebase. This requires sending an
              anonymous app-instance identifier, not any personal information.
            </li>
            <li>
              <strong>
                App integrity check (Firebase App Check / Google Play
                Integrity).
              </strong>{" "}
              On launch, the app asks Google to verify it&apos;s a genuine,
              unmodified installation. This is a device/app attestation check,
              not a collection of your personal or game data.
            </li>
          </ul>
          <p>
            Google&apos;s handling of this data is governed by the{" "}
            <a
              href="https://policies.google.com/privacy"
              className="underline underline-offset-2 hover:text-gray-600 dark:hover:text-gray-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Privacy Policy
            </a>
            .
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">What we don&apos;t do</h2>
          <ul className="list-disc space-y-1 pl-5">
            <li>No user accounts or sign-in</li>
            <li>No advertising SDK</li>
            <li>No in-app purchases or payment processing</li>
            <li>
              PotSettle does not process real-money transfers between players —
              it only records amounts you enter to help you settle up yourselves
            </li>
            <li>
              No access to your location, camera, contacts, or photos — the app
              requests only network access, used solely for the Firebase
              services described above
            </li>
          </ul>
          <p>
            If in-app purchases or ads are introduced in a future version, this
            policy will be updated before that version is released, and the
            update will be reflected in the &quot;Last updated&quot; date above.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Children&apos;s privacy</h2>
          <p>
            PotSettle is not directed at children under 13, and we do not
            knowingly collect data from children under 13.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">
            Data retention and deletion
          </h2>
          <p>
            Uninstalling PotSettle, or clearing its data from Android&apos;s App
            Info screen, immediately removes all locally stored data described
            above. Because there is no PotSettle account or server, there is no
            separate account-deletion process. Data sent to Firebase (analytics
            events, crash reports) is retained according to Google&apos;s
            standard Firebase retention periods.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Changes to this policy</h2>
          <p>
            We may update this policy as the app changes. The date at the top
            will always reflect the most recent revision.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Contact</h2>
          <p>
            Questions about this policy or your data:{" "}
            <a
              href="mailto:athresh.kiran@gmail.com"
              className="underline underline-offset-2 hover:text-gray-600 dark:hover:text-gray-300"
            >
              athresh.kiran@gmail.com
            </a>
          </p>
        </section>
      </article>
    </main>
  );
}
