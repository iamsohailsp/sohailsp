module "vpc" {
  source                = "./modules/vpc"
  cidr_block            = "10.0.0.0/16"
  public_subnets_cidrs  = ["10.0.1.0/24", "10.0.2.0/24", "10.0.3.0/24"]
  private_subnets_cidrs = ["10.0.101.0/24", "10.0.102.0/24", "10.0.103.0/24"]
  availability_zones    = ["ca-central-1a", "ca-central-1b", "ca-central-1d"]
  name                  = "sohailpathansp"
  env_name              = "dev"
}
module "ec2" {
  source           = "./modules/ec2"
  vpc_id           = module.vpc.vpc_id
  public_subnets   = module.vpc.public_subnet_ids
  ami              = "ami-0c4596ce1e7ae3e68"
  instance_type    = "t2.small"
  name             = "sohailpathansp"
  min_size         = 1
  max_size         = 3
  desired_capacity = 2
  env_name         = "dev"
}
module "load_balancer" {
  source                 = "./modules/load_balancer"
  vpc_id                 = module.vpc.vpc_id
  public_subnets         = module.vpc.public_subnet_ids
  security_group_id      = module.ec2.ec2_security_group_id
  autoscaling_group_name = module.ec2.autoscaling_group_id
  name                   = "sohailpathansp"
  env_name = "dev"
}



##############################
module "qa-vpc" {
  source                = "./modules/vpc"
  cidr_block            = "10.0.0.0/16"
  public_subnets_cidrs  = ["10.0.1.0/24", "10.0.2.0/24", "10.0.3.0/24"]
  private_subnets_cidrs = ["10.0.101.0/24", "10.0.102.0/24", "10.0.103.0/24"]
  availability_zones    = ["ca-central-1a", "ca-central-1b", "ca-central-1d"]
  name                  = "sohailpathansp"
  env_name              = "qa"
}
module "qa-ec2" {
  source           = "./modules/ec2"
  vpc_id           = module.vpc.vpc_id
  public_subnets   = module.vpc.public_subnet_ids
  ami              = "ami-0c4596ce1e7ae3e68"
  instance_type    = "t2.medium"
  name             = "sohailpathansp"
  min_size         = 1
  max_size         = 3
  desired_capacity = 2
  env_name         = "qa"
}
module "qa-load_balancer" {
  source                 = "./modules/load_balancer"
  vpc_id                 = module.vpc.vpc_id
  public_subnets         = module.vpc.public_subnet_ids
  security_group_id      = module.ec2.ec2_security_group_id
  autoscaling_group_name = module.ec2.autoscaling_group_id
  name                   = "sohailpathansp"
  env_name = "qa"
}