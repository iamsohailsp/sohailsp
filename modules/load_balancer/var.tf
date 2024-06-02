variable "vpc_id" {
  description = "The VPC ID"
  type        = string
}

variable "public_subnets" {
  description = "A list of public subnet IDs"
  type        = list(string)
}

variable "security_group_id" {
  description = "The security group ID for the load balancer"
  type        = string
}

variable "autoscaling_group_name" {
  description = "The name of the auto-scaling group"
  type        = string
}

variable "name" {
  description = "The name prefix for resources"
  type        = string
}
variable "env_name" {
  type = string
}