resource "aws_vpc" "main" {
  cidr_block = var.cidr_block
  tags = {
    Name = "${var.env_name}-${var.name}"
  }
}

resource "aws_internet_gateway" "igw" {
  vpc_id = aws_vpc.main.id
  tags = {
    Name = "${var.env_name}-${var.name}-igw"
  }
}

resource "aws_subnet" "public" {
  count = 3
  vpc_id            = aws_vpc.main.id
  cidr_block        = element(var.public_subnets_cidrs, count.index)
  map_public_ip_on_launch = true
  availability_zone = element(var.availability_zones, count.index)
  tags = {
    Name = "${var.env_name}-${var.name}-public-subnet-${count.index + 1}"
  }
}

resource "aws_subnet" "private" {
  count = 3
  vpc_id            = aws_vpc.main.id
  cidr_block        = element(var.private_subnets_cidrs, count.index)
  availability_zone = element(var.availability_zones, count.index)
  tags = {
    Name = "${var.env_name}-${var.name}-private-subnet-${count.index + 1}"
  }
}

resource "aws_route_table" "public" {
  vpc_id = aws_vpc.main.id
  tags = {
    Name = "${var.env_name}-${var.name}-public-rt"
  }
}

resource "aws_route" "igw_route" {
  route_table_id         = aws_route_table.public.id
  destination_cidr_block = "0.0.0.0/0"
  gateway_id             = aws_internet_gateway.igw.id
}

resource "aws_route_table_association" "public" {
  count          = 3
  subnet_id      = element(aws_subnet.public.*.id, count.index)
  route_table_id = aws_route_table.public.id
}

resource "aws_eip" "nat" {  # Added Elastic IP resource
  vpc = true
}

resource "aws_nat_gateway" "nat" {
  allocation_id = aws_eip.nat.id
  subnet_id     = element(aws_subnet.public.*.id, 0)
  tags = {
    Name = "${var.env_name}-${var.name}-nat"
  }
}

resource "aws_route_table" "private" {
  count = 3
  vpc_id = aws_vpc.main.id
  tags = {
    Name = "${var.env_name}-${var.name}-private-rt-${count.index + 1}"
  }
}

resource "aws_route" "nat_route" {
  count                 = 3
  route_table_id        = element(aws_route_table.private.*.id, count.index)
  destination_cidr_block = "0.0.0.0/0"
  nat_gateway_id        = aws_nat_gateway.nat.id
}

resource "aws_route_table_association" "private" {
  count          = 3
  subnet_id      = element(aws_subnet.private.*.id, count.index)
  route_table_id = element(aws_route_table.private.*.id, count.index)
}
