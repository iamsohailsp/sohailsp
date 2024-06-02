#variable "VPC_name" {
#  type = map(string)
#  default = {
#    "dev" =  "devlopment-vpc"
#    "prod" = "production-vpc"
#  }
#}
#variable "CIDR" {
#  default = "170.10.0.0/16"
#}
#variable "instace_name" {
#  type = map(string)
#  default = {
#    "dev" =  "dev-instance"
#    "prod" = "prod-instance"
#  }
#}
#variable "key_name" {
#  type = map(string)
#  default = {
#    "dev" = "dev-key"
#    "prod" = "prod-key"
# }
#}
variable "VPC_name" {
  default = "vpc-daily-105"
}
variable "public_subnets" {
  default = "10.0.1.0/24"
}
variable "private_subnets" {
  default = "10.0.2.0/24"
}
variable "zone1" {
  default = "ca-central-1a"
}
variable "zone2" {
  default = "ca-central-1b"
}
variable "zone3" {
  default = ""
}



