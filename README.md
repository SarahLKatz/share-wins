## Share Wins

#### About This Project
Most important question: what is this project?

(Once the MVP is done and deployed) Share Wins is (/will be) a website that's all about sharing our wins with random internet strangers. When you visit the live site at (website will be included here once it's deployed and I decide if I want to buy a domain name for it), you will see a win that someone has anonymously submitted to the site, and you get the joy of celebrating that win!

If you have a win that you want the community to celebrate, you can input that win, and it will join the collection of wins that can be displayed on the site. Someday soon a user may see your win and celebrate with you!

#### To-Do Items
- [ ] Tests. Seriously, let's get some more tests in here. Tests should go in the `src/__tests__/` folder
- [ ] Hooking Up a Database. Because right now the only wins that can display are ones I hard-coded in, and inputted wins go nowhere. My plan was to hook it up to a Firebase real-time database, but I'm open to other ideas.
- [ ] Additional Styling. This could be much prettier. Right now I'm using Material UI because I wanted styles *fast*, but if someone wants to scrap that and build the styles from scratch ... I'm cool with that.
- [ ] Sanitizing input. Right now someone could DROP TABLE; this and I wouldn't notice. We should probably work on changing that. I'm not cool deploying this to the internets with this DROP TABLE; situation going on.
- [ ] Deploying to the Internet. We should probably get most of the above done first, but ... I would like this to go live at some point.
##### Possible Additional Features
- [ ] Users? My initial idea was to have wins associated with users somehow, so that you can congratulate someone on their win, but then it seemed like too much work. Would be cool with someone introducing that if they want to do the work, but it would have to be early before we start putting all the anonymous wins out there (or we could do option of anonymous or submitted by user...)
- [ ] Likes? Do we want to give people the ability to "like" wins? Not sure the point of this would be, because it's not like you'll see who liked your win (unless we set up users), but I dunno...
- [ ] Anything else you want to add

#### About Contributing
##### Getting Set Up:
*Things You Need To Have Installed To Run This Repo*: [Node](https://nodejs.org/en/download/), package manager (npm or [yarn](https://yarnpkg.com/en/) - I use yarn). If you use Mac OS and have homebrew installed, Node and yarn can both be installed using homebrew - `brew install node` and `brew install yarn` (which actually also installs Node). Whatever method you use, npm comes installed with node. For other operating systems, you can follow instructions at the links above.

Once you have node installed, getting the app up and running to work on the repo is super simple. Steps:
1. Fork the repository
2. Clone the repository to your local machine
3. Install dependencies using `yarn` or `npm install` (I used yarn, so there's a `yarn.lock` but no `package-lock.json` ... so if you prefer npm, be aware of that)
4. Run `npm start` to start the app!

Everything is currently written in JavaScript and React, and I'd like to keep it that way. If you want to contribute but those aren't really your jam, let me know and I'll see if we can find a way to get your contributions in without you having to learn a new language/framework or me having to convert work from another language to javascript.

##### What/How To Contribute
The first thing to do is decide what you want to work on. See above for suggestions/things that need to be done for MVP, but you can also throw in something that's not listed there. Once you've decided what to work on, raise an issue (if one hasn't already been raised) and mention there that you're working on it (so that I know that I don't have to). Make sure to include test coverage, and if you're working on an issue that's listed in the README, include an edit to the README to take that off the "To-Do" list.

Once your work is done, it's time to get it into the repo. Put in a pull request (to master), and when I get a chance, I'll pull down your work, run it (and the tests) to make sure it does what it's supposed to, and hopefully merge it! If I see something that doesn't work or I want changed, I'll leave you a comment - be sure to ask questions if you disagree with my comment or it doesn't make sense!

#### List of Contributors
Sarah Katz [Github](https://github.com/sarahlkatz) [Twitter](https://twitter.com/home)
