---

title: Dotfiles - November 2017
date: 2017-11-23
tags:
    - dotfiles
    - bash
    - tmux
    - vim
color: orange
published: false

---

# History

- Started out as a fork from some dude. That worked for awhile, I liked having a decent point to start from. Gave me lots of good aliases, most of which I still use! Wasn't a huge fan of having to use a script to copy the actual repo files to my home dir
- Shamelessy stole the idea of making my actual home dir my Dotfiles from from Nick Lopez! Went from the standard git whitelist, to more of a blacklist format. Starts out with making a gitignore that ignores everything and then tell it to which files you don't want to ignore. Now no more scripts and crap!
- Then I decided to ditch Rubymine for VIM! This time I wanted to start from scratch and not start from someone else's config. So I deleted the vim files from the original config and started from scratch
- Next came powerline, to which was really fun! But it was a bit hard to setup, and have running. Had lots of potential though! Wrote a nice little python script to hit glassy to get the pendant status.
- Anson wasn't super happy with my powerline setup at work lol it was sending him lots of alerts about my machine and stuff
- So had to drop Powerline for Airline. The cool part is it's written in 100 vimscript so much easier to set up! Hooked that up with tmuxline.vim which gives tmux the same them as my vim line. It's not as feature rich, but I think I can write command line apps that function similarly to the python script.
- Just decided to always use Airline, cause I didn't want to have a different setup and work and home.
