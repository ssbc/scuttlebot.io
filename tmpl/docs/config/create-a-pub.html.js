var page = require('../../page.part')
var com = require('../../com.part')

module.exports = () => page({
  title: 'Create a Pub',
  section: 'docs',
  tab: 'docs-config',
  path :'/docs/config/create-a-pub.html',
  content: `
    <h2>1. Get a public server</h2>
    <p>
      Pub servers need a static, publicly-reachable IP address.
      The easiest way to get a public server is by renting a virtual server from businesses such as <a href="https://aws.amazon.com/">Amazon</a>, <a href="https://www.linode.com/">Linode</a>, or <a href="https://www.digitalocean.com/">Digital Ocean</a>.
    </p>
    <p>
      After renting the server, follow the guides provided by your host to configure the software and install nodejs.
      We recommend using a common Linux distribution, such as Ubuntu.
    </p>

    <h2>2. Install Scuttlebot</h2>
    <p>
      Install Scuttlebot using NPM.
    </p>
    ${ com.code({ bash: `npm install -g scuttlebot` }) }
    <p>
      To update scuttlebot in the future, simply run the global install again.
    </p>

    <h2>3. Create a run-sbot.sh script</h2>
    <p>
      Save the following script somewhere easy to find, such as <code>~/run-sbot.sh</code>.
      This script will help ensure uptime, even if scuttlebot experiences a crash:
    </p>
    ${ com.code({ bash: `
#!/bin/bash
while true; do
  sbot server --host {your-hostname}
done
    ` }) }
    <p>
      Be sure to replace <code>{your-hostname}</code> with the actual hostname of your server
      For instance, if your server is <code>foobar.com</code>, then you should enter <code>sbot server --host foobar.com</code>.
    </p>

    <h2>4. Run the server script</h2>
    <p>
      Use a session-manager such as <a href="https://www.rackaid.com/blog/linux-screen-tutorial-and-how-to/">screen</a> or <a href="https://wiki.archlinux.org/index.php/Tmux">tmux</a> to create a detachable session.
      Start the session and run the script:
    </p>
    ${ com.code({ bash: `sh ~/run-sbot.sh` }) }
    <p>
      Then, detach the session.
    </p>

    <h2>5. Confirm Scuttlebot server is running</h2>
    <p>
      To check if sbot is running, use the following command:
    </p>
    ${ com.code({ bash: `sbot whoami` }) }
    <p>
      If all is well, your Pub&#39;s ID will be logged to the console.
      If this fails, check that the server-script is still active, and isn&#39;t failing during startup.
    </p>

    <h2>6. Create the Pub&#39;s profile</h2>
    <p>
      It&#39;s a good idea to give your Pub a name, by publishing one on its feed.
      To do this, first get the Pub&#39;s ID, with <code>sbot whoami</code>.
      Then, publish a name with the following command:
    </p>
    ${ com.code({ bash: `sbot publish --type about --about {pub-id} --name {name}` }) }
    <p>
      It&#39;s a good idea to use your Pub&#39;s hostname.
      Also, don&#39;t use spaces, or include the <code>@</code> symbol.
      Here&#39;s an example usage (dont copy this!):
    </p>
    ${ com.code({ bash: `sbot publish --type about \\
      --about "@2mIg4e/GO...GEHoQp3U=.ed25519" \\
      --name "foobar.com"` }) }

    <h2>7. Create invites</h2>
    <p>
      For a last step, you should create invite codes, which you can send to other users to let them join the pub.
      The command to create an invite code is:
    </p>
    ${ com.code({ bash: `sbot invite.create 1` }) }
    <p>
      This may now be given out to friends, to command your pub to follow them.
      If you want to let a single code be used more than once, you can provide a number larger than 1.
    </p>

    <h2>8. Backup your data directory (optional)</h2>
    <p>
      It&#39;s a good idea to regularly backup the Pub&#39;s data directory, in case of failures.
      The data-directory will include the Pub&#39;s keypair, messages, and files.
      It can be found at <code>~/.ssb</code>, where <code>~</code> points to the home directory of the user running Scuttlebot.
    </p>

    <p class="next"><a href="/docs/message-types/post.html">Message types: Post</a></p>
    <ul class="see-also">
      <li><a href="/apis/scuttlebot/invite.html">Scuttlebot.Invite API</a></li>
      <li><a href="/more/protocols/secure-scuttlebutt.html">Secure Scuttlebutt</a></li>
    </ul>
  `
})