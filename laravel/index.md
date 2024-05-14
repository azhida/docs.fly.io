# Laravel on Fly.io

Getting an application running on Fly.io is essentially working out how to package it as a deployable image. Once packaged, it can be deployed to the Fly.io global application platform.

In this guide we’ll learn how to deploy a Laravel application on Fly.io.

For an overview of how to configure your application with services like caching, databases, and queues, reading through our Full Stack Laravel post is the best place to start.

## Prepare a Laravel app

Bring your own Laravel app, or create a new one!

If you want to start fresh, here’s how to set up a new application. You’ll need PHP 8+ and composer installed locally. You can check your PHP version using `php --version`.

```sh
composer create-project laravel/laravel fly-laravel
cd fly-laravel
php artisan serve
```

You should be able to visit `http://localhost:8000` and see the home page.

## Deploy to Fly.io

### Install Fly

First, install flyctl, your Fly.io app command center, and sign up to Fly.io if you haven’t already.


### Launch

Next, we’ll use the `launch` command to automagically configure your app for Fly.

The `launch` command adds a few files to your code base. Don’t worry, it will ask before overwriting anything.

If you haven’t already, go ahead and run `fly launch`!

```sh
fly launch
```

When asked if you want to deploy now, say No.

If you have other environment variables to set, you can edit the `fly.toml` file and add them.

```toml
[env]
# Set any env vars you want here
# Caution: Don't add secrets here
APP_URL = "https://fly-hello-laravel.fly.dev"
```

Replace this with the URL your app will be served on (by default, `"https://<your-app-name>.fly.dev"`).

For sensitive data, you can set secrets with the fly secrets set command:

```sh
fly secrets set SOME_SECRET_KEY=<the-value-from-your-env-file>
```

::: tip
The `fly launch` command will generate a secret with a valid, random value for `APP_KEY`.
:::

### Deploy

Finally, run `fly deploy` to build and deploy your application!

You should be able to visit `https://your-app-name.fly.dev` and see the Laravel demo home page.

That’s it! Run `fly apps open` to see your deployed app in action.

Try a few other commands:

- fly logs - Tail your application logs
- fly status - View your app’s current deployment status
- fly ssh console - Open a terminal on your VM
- fly deploy - Deploy the application after making changes


### Some Notes