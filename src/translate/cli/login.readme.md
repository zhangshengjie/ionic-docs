Authenticate with Ionic and retrieve a user token, which is stored in the CLI config. The most secure way to log in is running `ionic login` without arguments, which will prompt you for your credentials.

If the `IONIC_TOKEN` environment variable is set, the CLI will automatically authenticate you. To retrieve your user token, first use `ionic login`, then print the token by running the `ionic config get -g tokens.user` command.

`ionic login` will also accept `password` through stdin, e.g.: `echo "<password>" | ionic login <email>`.

If you need to create an Ionic account, use `ionic signup`.

You can reset your password in the [Dashboard](https://dashboard.ionicframework.com/reset-password).

If you are having issues logging in, please get in touch with our [Support](https://ion.link/support-request).