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
            Last updated: August 13, 2026
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
            sessions you host. Signing in with Google is optional and adds
            cloud backup of your ledger and, separately, in-app purchases to
            raise seat limits, remove ads, or unlock Premium.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Data stored on your device</h2>
          <p>
            The following is always stored locally in the app&apos;s own
            database first, regardless of whether you sign in:
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>Player names you enter</li>
            <li>Buy-in, rebuy, and cash-out amounts</li>
            <li>Session settlement and ledger history</li>
            <li>Your currency preference and other app settings</li>
          </ul>
          <p>
            PotSettle has no account or server of its own. Where data leaves
            your device, it goes to the named third-party services below, not
            to us directly.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">
            Optional Google Sign-In and cloud backup
          </h2>
          <p>
            Signing in with Google is entirely optional — PotSettle&apos;s core
            ledger features work fully without it. If you choose to sign in
            (via Firebase Authentication), we receive your Google account&apos;s
            name, email address, and profile photo URL to identify your
            account across devices.
          </p>
          <p>
            If you then use the Backup feature, a copy of your session/ledger
            data is uploaded to Google Cloud Storage, and a small metadata
            record (last backup time, app version) is stored in Cloud
            Firestore — both scoped privately to your account via Firebase
            security rules, so only you can read or write them. Nothing is
            uploaded unless you sign in and back up yourself.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Payments and subscriptions</h2>
          <p>
            In-app purchases (raising your seat limit, removing ads, or
            subscribing to Premium) are processed entirely by Google Play
            Billing — PotSettle never sees or stores your payment card
            details. We use RevenueCat, a third-party subscription management
            platform, to verify and keep your entitlements in sync across
            devices. RevenueCat receives a purchaser identifier (your Firebase
            account ID if signed in, otherwise an anonymous device ID) and
            your purchase/subscription status. See{" "}
            <a
              href="https://www.revenuecat.com/privacy"
              className="underline underline-offset-2 hover:text-gray-600 dark:hover:text-gray-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              RevenueCat&apos;s privacy policy
            </a>
            .
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Advertising</h2>
          <p>
            PotSettle shows optional ads (Google AdMob) at points such as
            adding a buy-in or adding a player beyond the free seat limit —
            watching one is an alternative to purchasing, never a requirement.
            Purchasing Ad-Free or Premium removes ads entirely. AdMob collects
            your device&apos;s advertising ID and usage data to serve and
            measure ads. Where required (e.g. in the EEA/UK), PotSettle shows
            Google&apos;s consent form (User Messaging Platform) before
            requesting personalized ads. See{" "}
            <a
              href="https://policies.google.com/technologies/ads"
              className="underline underline-offset-2 hover:text-gray-600 dark:hover:text-gray-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              how Google uses data for advertising
            </a>
            .
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Other data sent off your device</h2>
          <p>
            PotSettle uses Google Firebase for the following, all processed by
            Google on our behalf:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>Analytics (Firebase Analytics).</strong> Standard
              app-usage events (e.g. app opens, screens viewed) and a small
              number of app-specific events (e.g. when a buy-in is started, when
              a forced update is shown).
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
            <li>We don&apos;t sell your data, to anyone, ever</li>
            <li>
              PotSettle does not process real-money transfers between players —
              it only records amounts you enter to help you settle up yourselves
            </li>
            <li>
              No access to your location, camera, contacts, or photos — the app
              requests only network/internet access and (when ads are shown)
              your device&apos;s advertising ID
            </li>
            <li>
              Sign-in and cloud backup are opt-in — the app works fully
              offline without either
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Children&apos;s privacy</h2>
          <p>
            PotSettle is not directed at children under 13, is not part of
            Google Play&apos;s Designed for Families program, and we do not
            knowingly collect data from children under 13. Ads shown in the
            app are not targeted at children.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">
            Data retention and deletion
          </h2>
          <p>
            Uninstalling PotSettle, or clearing its data from Android&apos;s App
            Info screen, immediately removes all locally stored data.
          </p>
          <p>
            If you signed in, Settings → Delete Account permanently deletes
            your cloud backup, your Firestore metadata record, and your
            Firebase Authentication account, and also wipes the app&apos;s
            local data on that device. Purchase and subscription records are
            retained by Google Play and RevenueCat according to their own
            retention policies (standard for financial/tax records) even
            after account deletion. Analytics and crash-report data already
            sent to Firebase is retained per Google&apos;s standard Firebase
            retention periods.
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
