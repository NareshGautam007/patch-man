# patch-man

```
             _       _
 _ __   __ _| |_ ___| |__        _ __ ___   __ _ _ __
| '_ \ / _` | __/ __| '_ \ _____| '_ ` _ \ / _` | '_ \
| |_) | (_| | || (__| | | |_____| | | | | | (_| | | | |
| .__/ \__,_|\__\___|_| |_|     |_| |_| |_|\__,_|_| |_|
|_|
```

![npm](https://img.shields.io/npm/v/patch-man?logo=npm&label=patch-man&style=for-the-badge)
[![patch-man npm](https://img.shields.io/npm/dt/patch-man?style=for-the-badge)](https://npmjs.com/package/patch-npm)

![Made with love in India](https://madewithlove.now.sh/in?heart=true&template=for-the-badge) `&& ` ![javascript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)

## Bug Tracking Tool using NPM

Patch-Man is a package that provides alert notifications to your email when a bug arises in your code. It uses AWS Simple Email Service (SES) to send these notifications.

## Usage Steps

To effectively utilize Patch-Man, follow these steps:

### 1. AWS SES Setup

Create an AWS SES secret key and client ID for email setup.

### 2. Environment Setup

Set up your `.env` file with the following variables:

- `ProjectName`: Your project's name.
- `ClientId` and `SecretKey` (AWS): Required for AWS SES setup.
- `VerifiedMail` (SES): Email address for receiving alerts.
- `ToMails`: Email addresses to receive alert mails.

### 3. Integration

Integrate Patch-Man into your project's routes directory. Call `awsSES(error)` within the exception catch block, passing the error as a parameter.

**Note:** Replace the repository name (`sample_project`) with your own repository. The repository provided is for demonstration purposes only.

# <<<<<<< HEAD

> > > > > > > main

## Installation

```javascript
const patch-hman = require('patch-man')
```

<<<<<<< HEAD

### Sample code

=======

### Sample code

> > > > > > > main

```javascript
try {
  // Your code that might throw an error
  const result = 10 / 0;
} catch (error) {
  // Using patch-man function to report the error
  patchMan.awsSES(error);
}
<<<<<<< HEAD
```

=======

```
>>>>>>> main
```
