# Hire Our General Assembly Cohort
Hire Our General Assembly Cohort Project 
This project is meant to help students create something of their own to send to employers and recruiters. When one of us succeeds we all succeed 


--HOW TO FORK, PULL, MAKE CHANGES--
    1- First off, we have to open the terminal and type ssh-keygen -t ed25519 -C "your_email@example.com"

        -- This will allow you to generate a new SSH key that you can use to setup a new repo fork

        --Once you have clicked enter, you will see a prompt that says: "Generating public/private algorithm key pair."

        --You will be prompted to add new location...just click enter to save onto default system folder (desktop)

        ----> You will be prompted to add a keyphrase (password)... you can leave it blank or add new. Click enter

        -----> Next, start the ssh agent in the backround by pluging this into the terminal: eval "$(ssh-agent -s)"
                    You should see something like this pop up: > Agent pid 59566
        ------> Next, check and see if the ssh config file exists by: open ~/.ssh/config | in terminal
                    if it does not exist...use this: touch ~/.ssh/config
        ------->Open your new ~/.ssh/config file, then modify the file to contain the following lines. 
            Host *
            AddKeysToAgent yes
            UseKeychain yes
            IdentityFile ~/.ssh/id_ed25519

            (( if you used a password, keey the usekeychain as yes...if you did not, delete the keychain line))

        --------> Now, add the ssh key: ssh-add -K ~/.ssh/id_ed25519
                plug into terminal

        ---------> Next, add the new SSH key to your github account by doing the following
                    pbcopy < ~/.ssh/id_ed25519.pub
                    --This essentially copies the ssh key to your clipboard, which you will now use to paste into the github ssh key tab...on github. 
        ---------->Go to github, go to settings, click on ssh keys, add new ssh key. 
                        YOU ARE DONE!!

        FORK --> 
        Go into the repository of your choosing on github
        -- go to the green code button and click it to open up a small screen
        --click the ssh option
        --copy the link provided
        --go to your terminal and paste the following: git clone "key provided from the github ssh fork option"
        -- you should be done by now
            if the terminal prompts you to assing a location, just choose whatever location you would like to place the repo fork at.
            YOU FORKED IT!

        MAKING CHANGES-->
        --Once you have your repo setup...go ahead and git pull
        you should see something that tells you, you are up to date

        --NOTE--
        --> if you are making changes to a file inside of our repo, please make sure you always--> git add "file name" --> git commit -m "commit note" --> git push 
        --through these three steps, you have succesfully saved, confirmed and uploaded a file into the OG repo.
        --COOL STUFF

        NOTE.2--> IF YOU ARE WORKING ON A FILE, BE SURE TO CREATE A PULL REQUEST ON GITHUB, AFTER YOU HAVE SUCCESFULLY GIT ADDED, COMMITED AND PUSHED. YOUR UPDATED FILE WILL NOT SHOW UP ON THE MAIN REPO UNLESS YOU CREATE A PULL REQUEST DIRECTLY ON GITHUB.


       sources: https://docs.github.com/en/get-started/quickstart/fork-a-repo
       https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork
       https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests
       https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account
       ---------------------------------------------------------------------------------------------------------------



only a few active ppl will be collaborator, everyone else needs to do a pull request with their personal information

current task is to just import personal information using tempalte

template is in directory/directory.html and can be copied here for an example 

current issues we are resolving looking for people 
1. index.html/css styling for main page using bootstrap, etc 
2. directory/directory.html/css styling

These are the goals for week 2!

Once more ppl are familiar with databases we can move the information from directory to databses to populate other things
