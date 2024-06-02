resource "aws_security_group" "sohelpathansp_sg" {
  vpc_id = var.vpc_id

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "${var.env_name}-${var.sg_name}"
  }
}

resource "aws_launch_configuration" "sohailpathansp" {
  name_prefix          = "${var.env_name}-${var.name}"
  image_id             = var.ami
  instance_type        = var.instance_type
  security_groups      = [aws_security_group.sohelpathansp_sg.id]
  key_name             = var.key_name
  associate_public_ip_address = true
  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_autoscaling_group" "example" {
  launch_configuration = aws_launch_configuration.sohailpathansp.id
  vpc_zone_identifier  = var.public_subnets
  min_size             = var.min_size
  max_size             = var.max_size
  desired_capacity     = var.desired_capacity
  tag {
    key                 = "Name"
    value               = "${var.env_name}-${var.name}"
    propagate_at_launch = true
  }

  lifecycle {
    create_before_destroy = true
  }
}
