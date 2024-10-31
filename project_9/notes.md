# Content
- Deployment Overview and General Process
- Deployment Scenarios, Examples & Problems

# Deployment Overview and General Process
## Containers are Always Great
In Development or in Production
- Isolated, standalone environment
- Reproducible environment (easy to share and use)
- What works on your machine (in a container) will also work after deployment

## Development to Production: Things to Watch Out For
- **Bind mounts** _shouldn't_ be used in production
- Containerized apps might need a build step
- **Multi-container projects** might need to be split across multiple hosts/remote machines
- Trade-offs between control and responsibility might be worth it

## Deployment Process & Providers

Basic first example will be a standalone NodeJS app

Development Machine -> Container Registry -> Remote Host -> End User Machine

We will use AWS for this course.

## Bind Mounts, Volumes, & Copy

### Development
- Containers should encapsulate the runtime environment but not necessarily the code
- Use **Bind Mounts** to provide your local host project files to the running container
- Allows for instant updates without restarting the container

### Production
- A container should really work standalone (should NOT have source code on your remote machine)
  - The Image / Container is the "_single source of truth_"
- Use **Copy** to copy a code snapshot into the image
- Ensures that every image runs without any extra, surrounding configuration or code

## "Do it yourself" Approach
We own the remote machine, so we're responsible for its security.
- Keep essential software updated
- Manage network and security.
SSHing into the machine can also be a hassle.

These are some of the reasons to trade-off between control and responsibility.

- Your Own Remote Machines _e.g. AWS EC2_
  - Need to create, manage, update monitor, scale, etc.
  - Great if you know what you're doing
- Managed Remote Machines _e.g. AWS ECS_
  - Responsibilities are simplified
  - Better if you want to worry about app, rather than details of deployment
  - Restricts you to the rules of the service

