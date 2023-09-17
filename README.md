![Build Status](https://gitlab.com/dAnjou/frozen-flask-for-gitlab-pages/badges/master/build.svg)

---

Example [Frozen-Flask](http://pythonhosted.org/Frozen-Flask/) website using GitLab Pages.

Learn more about GitLab Pages at https://pages.gitlab.io and the official
documentation https://docs.gitlab.com/ce/user/project/pages/.

---

## GitLab CI

This project's static Pages are built by [GitLab CI][ci], following the steps
defined in [`.gitlab-ci.yml`](.gitlab-ci.yml).

## Building locally

To work locally with this project, you'll have to follow the steps below:

1. Fork, clone or download this project
1. Install [Frozen-Flask](http://pythonhosted.org/Frozen-Flask/)
1. Generate the website: `FLASK_APP=app.py env/bin/flask freeze`
1. Preview your project: `FLASK_APP=app.py env/bin/flask serve`
1. Add content

Read more at Frozen-Flask's [documentation](http://pythonhosted.org/Frozen-Flask/).

## GitLab User or Group Pages

To use this project as your user/group website, you will need two additional
steps:

- rename your project to `namespace.gitlab.io`, where `namespace` is
your `username` or `groupname`. This can be done by navigating to your
project's **Settings**.
- change the `FREEZER_BASE_URL` in `app.py`.

Read more about [user/group Pages][userpages] and [project Pages][projpages].

## Did you fork this project?

If you forked this project for your own use, please go to your project's
**Settings** and remove the forking relationship, which won't be necessary
unless you want to contribute back to the upstream project.

---

Forked from https://gitlab.com/dAnjou/frozen-flask-for-gitlab-pages

[ci]: https://about.gitlab.com/gitlab-ci/
[userpages]: https://docs.gitlab.com/ce/user/project/pages/introduction.html#user-or-group-pages
[projpages]: https://docs.gitlab.com/ce/user/project/pages/introduction.html#project-pages
