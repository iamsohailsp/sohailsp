variable "vpc_id" {
  description = "The VPC ID"
  type        = string
}

variable "public_subnets" {
  description = "A list of public subnet IDs"
  type        = list(string)
}

variable "ami" {
  description = "The AMI to use for the instance"
  type        = string
}

variable "instance_type" {
  description = "The type of instance to use"
  type        = string
}

variable "name" {
  description = "The name prefix for resources"
  type        = string
}

variable "min_size" {
  description = "The minimum size of the auto-scaling group"
  type        = number
}

variable "max_size" {
  description = "The maximum size of the auto-scaling group"
  type        = number
}

variable "desired_capacity" {
  description = "The desired capacity of the auto-scaling group"
  type        = number
}
variable "env_name" {
     type = string
}
variable "sg_name" {
     default = "sohelpathansp.sg"
}
variable "key_name" {
     default = "canada_key"
}